import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

const BlogStyle =  createGlobalStyle`
  // html, body, div, span, applet, object, iframe,
  // h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  // a, abbr, acronym, address, big, cite, code,
  // del, dfn, em, img, ins, kbd, q, s, samp,
  // small, strike, strong, sub, sup, tt, var,
  // b, u, i, center,
  // dl, dt, dd, ol, ul, li,
  // fieldset, form, label, legend,
  // table, caption, tbody, tfoot, thead, tr, th, td,
  // article, aside, canvas, details, embed,
  // figure, figcaption, footer, header, hgroup,
  // menu, nav, output, ruby, section, summary,
  // time, mark, audio, video {
  //   margin: 0;
  //   padding: 0;
  //   border: 0;
  //   font-size: 100%;
  //   font: inherit;
  //   vertical-align: baseline;
  // }

  h1 {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1.5;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }

  h2 {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 2.0;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h3, h4, h5, h6 {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 2.0;
    font-weight: 450;
    font-size: 2rem;
  }

  // h1 {
  //   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  //   line-height: 2.0;
  //   font-size: 4rem;
  //   margin-bottom: 2rem;
  // }
  //
  // h2 {
  //   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  //   line-height: 2.0;
  //   font-size: 3rem;
  //   margin-bottom: 1.5rem;
  // }
  //
  // h3, h3, h4, h5, h6 {
  //   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  //   line-height: 2.0;
  //   font-size: 2rem;
  // }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1.5;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    // list-style: none;
  }

  blockquote, q {
    font-size: 1.6rem;
    line-height: 2.0;
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};

  }

  pre {
    // display: block;
    // padding: 2rem;
    // // margin-top: 4rem;
    // overflow: auto;
    // font-size: 85%;
    // line-height: 1.45;
    // border-radius: 5px;
    // color: ${accent};
    // background-color: #CFCFCF;
    // border: 1px solid #ddd;
    // font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;

    // font-family: monospace;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;

    background-color: #4C4C4C;
    width: em(440);
    margin: 2em auto;
    padding: 2em;
    border: 1px solid #ddd;
    border-radius: 1em;
    box-shadow: .1em .1em .5em rgba(0,0,0,.45);
    line-height: 0;
    counter-reset: line;
    code {
      color: #fff;
      border: 0px;
    }

  }

  code {
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 0rem;
    line-height: 1.5;
    font-size: 1.6rem;
    color: #635e69;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.75;
    font-size: 1.6rem;
  }
`;

export default BlogStyle;
