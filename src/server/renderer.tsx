import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import Helmet from 'react-helmet';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import { CookiesProvider } from 'react-cookie';
import { useApolloClient } from '../config/store';
import { StaticRouter } from 'react-router';
import template from './template';
import { Root } from '../client/pages';

type Context = {
  url?: string;
};

export default async function renderer(
  req: express.Request,
  res: express.Response,
): Promise<string | undefined> {
  const statsFile = path.resolve('dist/loadable-stats.json');
  try {
    const key = 'custom';
    const cache = createCache({ key });
    const { extractCritical } = createEmotionServer(cache);
    const extractor = new ChunkExtractor({
      statsFile,
      entrypoints: ['client', 'react-vendors'],
    });
    const context: Context = {};

    const Client = () => {
      const apolloClient = useApolloClient();
      return (
        <ApolloProvider client={apolloClient}>
          {/* @ts-ignore */}
          <CookiesProvider cookies={req.universalCookies}>
            <StaticRouter location={req.url} context={context}>
              <CacheProvider value={cache}>
                <Root />
              </CacheProvider>
            </StaticRouter>
          </CookiesProvider>
        </ApolloProvider>
      );
    };

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      res.end();
    } else {
      const jsx = extractor.collectChunks(<Client />);
      const initialState = apolloClient.extract();
      const { html, css, ids } = extractCritical(renderToString(jsx));
      const styleTag = `<style data-emotion="${key} ${ids.join(' ')}">${css}</style>`;
      const scriptTags = extractor.getScriptTags();

      const htmlHead = () => {
        const { title, meta } = Helmet.renderStatic();
        return title.toString() + meta.toString();
      };

      return template(htmlHead(), styleTag, html, scriptTags, JSON.stringify(initialState));
    }
  } catch (err) {
    if (err) {
      return err.message;
    }
  }
}
