# Next.js base with material-ui and fontfaceobserver

A Next.js project base/starter set up with material-ui and a custom font using fontfaceobserver to prevent FOUT (flash of unstyled text).

## Why?
It's not super intuitive how to properly add material-ui to nextjs because there are a ton of dependencies and pitfalls. Also trying to use a webfont adds another layer of complexity if you want to avoid the FOUT (flash of unstyled text) issue in the moments before the webfont loads where you see the font flicker from the default system or Roboto font in this case (since that ships with material-ui) to your intended webfont.

## How to use
```sh
npm install
npm run dev
```

## Tech
[Next.js](https://github.com/zeit/next.js): framework for server-rendered React apps.

[Material-ui](https://github.com/mui-org/material-ui): react components for faster and easier web development.

[fontfaceobserver](https://github.com/zeit/next.js): webfont loading. Simple, small, and efficient. (BSD License)
