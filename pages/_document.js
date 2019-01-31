import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content="Uma comunidade para ajudar as pessoas a obter um melhor conhecimento de programação em javascript; aproximar programadores; organizar encontros, conferências e contribuir com projetos open-soure" />
          <meta name="keywords" content="Natal, RN, Conferência Javascript, JS, opensouce, projetos" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Natal.js - Comunidade para discutir javascript" />
          <meta property="og:site_name" content="Natal.js - Comunidade para discutir javascript" />
          <meta property="og:description" content="Uma comunidade para ajudar as pessoas a obter um melhor conhecimento de programação em javascript; aproximar programadores; organizar encontros, conferências econtribuir com projetos open-soure" />
          <meta property="og:image" content="/static/images/image-social.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nataljs" />
          <meta name="twitter:creator" content="@nataljs" />
          <meta name="twitter:title" content="Natal.js - Comunidade para discutir javascript" />
          <meta name="twitter:description" content="Uma comunidade para ajudar as pessoas a obter um melhor conhecimento de programação em javascript; aproximar programadores; organizar encontros, conferências e contribuir com projetos open-soure" />
          <meta name="twitter:image" content="/static/images/image-social.png" />
          <meta property="og:url" content="nataljs.github.io" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400i,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
