import { createGlobalStyle, css } from 'styled-components';
import NotoSansKRBold from '@assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKRSemiBold from '@assets/fonts/NotoSansKR-SemiBold.woff2';
import NotoSansKRRegular from '@assets/fonts/NotoSansKR-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html, body {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  menu, ol, li {list-style:none}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  *, button, textarea, a, input {
    font-family: 'NotoSansKR', sans-serif;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKRRegular}) format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKRSemiBold}) format('woff2');
    font-weight: 600;
  } 
  @font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKRBold}) format('woff2');
    font-weight: 700;
  } 
`;

export const blindStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
