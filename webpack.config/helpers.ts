import webpack from 'webpack';
import chalk from 'chalk';

type buildType = 'Client' | 'Server';

const log = console.log;

const addBuildPrefix = (name: buildType, stats: string): string => {
  const chalkStyle = name === 'Client' ? chalk.italic.cyan : chalk.italic.magenta;
  log(chalkStyle(`** ${name} Build Stats **`));
  const styledBuildMsg = chalkStyle(`[${name}-build] `);
  return stats.replace(/^/, styledBuildMsg).replace(/\n/gi, `\n${styledBuildMsg} `);
};

export const onBuild = (name: buildType, done?: any) => {
  return (err?: Error, stats?: webpack.Stats): void => {
    if (err) {
      console.error(err.stack || err);
      return;
    }

    if (stats) {
      log(addBuildPrefix(name, stats.toString({ colors: true })));
    }

    if (done) {
      done();
    }
  };
};
