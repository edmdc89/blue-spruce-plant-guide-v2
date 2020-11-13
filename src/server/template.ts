export default function template(
  head: string,
  styles: string,
  body: string,
  scripts: string,
  state: string,
): string {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500&family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />
        ${head}
        ${styles}
      </head>
      <body>
        <section id="root">${body}</section>
        <script>
          window.__APOLLO_CLIENT__ = ${state}
        </script>
        ${scripts}
      </body>
    </html>
  `;
}
