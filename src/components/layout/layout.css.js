// import { createGlobalStyle } from 'styled-components';
// import { accent } from 'constants/theme';
//
// export default createGlobalStyle`
//   // html, body, div, span, applet, object, iframe,
//   // h1, h2, h3, h4, h5, h6, p, blockquote, pre,
//   // a, abbr, acronym, address, big, cite, code,
//   // del, dfn, em, img, ins, kbd, q, s, samp,
//   // small, strike, strong, sub, sup, tt, var,
//   // b, u, i, center,
//   // dl, dt, dd, ol, ul, li,
//   // fieldset, form, label, legend,
//   // table, caption, tbody, tfoot, thead, tr, th, td,
//   // article, aside, canvas, details, embed,
//   // figure, figcaption, footer, header, hgroup,
//   // menu, nav, output, ruby, section, summary,
//   // time, mark, audio, video {
//   //   margin: 0;
//   //   padding: 0;
//   //   border: 0;
//   //   font-size: 100%;
//   //   font: inherit;
//   //   vertical-align: baseline;
//   // }
//
//   h1 {
//     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     line-height: 1.5;
//     font-size: 4rem;
//     margin-bottom: 2rem;
//   }
//
//   h2 {
//     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     line-height: 1.5;
//     font-size: 3rem;
//     margin-bottom: 1.5rem;
//   }
//
//   h3, h3, h4, h5, h6 {
//     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     line-height: 1.5;
//     font-size: 2rem;
//   }
//
//
//   /* HTML5 display-role reset for older browsers */
//   article, aside, details, figcaption, figure,
//   footer, header, hgroup, menu, nav, section {
//     display: block;
//   }
//
//   html {
//     font-size: 62.5%;
//   }
//
//   body {
//     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     line-height: 1.5;
//     font-size: 1.6rem;
//     color: #000;
//     background-color: #fff;
//     -webkit-text-size-adjust: 100%;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-rendering: optimizeLegibility;
//     -webkit-font-feature-settings: "pnum";
//     font-feature-settings: "pnum";
//     font-variant-numeric: proportional-nums;
//   }
//
//   li {
//     margin-bottom: 1.5rem;
//   }
//
//   ol, ul {
//     list-style: none;
//   }
//
//   blockquote, q {
//     font-size: 1.6rem;
//     line-height: 2.0;
//     quotes: none;
//   }
//
//   blockquote:before, blockquote:after,
//   q:before, q:after {
//     content: '';
//     content: none;
//   }
//
//   table {
//     border-collapse: collapse;
//     border-spacing: 0;
//   }
//
//   a {
//     color: ${accent};
//     // color: #635e69;
//   }
//
//   pre {
//     display: block;
//     padding: 2rem;
//     margin-top: 4rem;
//     overflow: auto;
//     font-size: 85%;
//     line-height: 1.45;
//     border-radius: 5px;
//     color: ${accent};
//     border: 1px solid #ddd;
//     font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
//   }
//
//   code {
//     font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
//     // font-family: Menlo, Monaco, "Courier New", monospace
//     // font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     // line-height: 2.0;
//     font-size: 1.6rem;
//     color: #635e69;
//   }
//
//   video {
//     max-width: 100%;
//   }
//
//   p {
//     margin-bottom: 2rem;
//   }
// `;
//
// // import { createGlobalStyle } from 'styled-components';
// // import { accent } from 'constants/theme';
// //
// // export default createGlobalStyle`
// //   html, body, div, span, applet, object, iframe,
// //   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// //   a, abbr, acronym, address, big, cite, code,
// //   del, dfn, em, img, ins, kbd, q, s, samp,
// //   small, strike, strong, sub, sup, tt, var,
// //   b, u, i, center,
// //   dl, dt, dd, ol, ul, li,
// //   fieldset, form, label, legend,
// //   table, caption, tbody, tfoot, thead, tr, th, td,
// //   article, aside, canvas, details, embed,
// //   figure, figcaption, footer, header, hgroup,
// //   menu, nav, output, ruby, section, summary,
// //   time, mark, audio, video {
// //     margin: 0;
// //     padding: 0;
// //     border: 0;
// //     font-size: 100%;
// //     font: inherit;
// //     vertical-align: baseline;
// //   }
// //
// //   /* HTML5 display-role reset for older browsers */
// //   article, aside, details, figcaption, figure,
// //   footer, header, hgroup, menu, nav, section {
// //     display: block;
// //   }
// //
// //   html {
// //     font-size: 62.5%;
// //   }
// //
// //   body {
// //     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
// //     line-height: 1;
// //     font-size: 1.6rem;
// //     color: #000;
// //     background-color: #fff;
// //     -webkit-text-size-adjust: 100%;
// //     -webkit-font-smoothing: antialiased;
// //     -moz-osx-font-smoothing: grayscale;
// //     text-rendering: optimizeLegibility;
// //     -webkit-font-feature-settings: "pnum";
// //     font-feature-settings: "pnum";
// //     font-variant-numeric: proportional-nums;
// //   }
// //
// //   ol, ul {
// //     list-style: none;
// //   }
// //
// //   blockquote, q {
// //     quotes: none;
// //   }
// //
// //   blockquote:before, blockquote:after,
// //   q:before, q:after {
// //     content: '';
// //     content: none;
// //   }
// //
// //   table {
// //     border-collapse: collapse;
// //     border-spacing: 0;
// //   }
// //
// //   a {
// //     color: ${accent};
// //   }
// //
// //   pre {
// //     display: block;
// //     padding: 2rem;
// //     margin-top: 4rem;
// //     overflow: auto;
// //     font-size: 85%;
// //     line-height: 1.45;
// //     border-radius: 5px;
// //     color: ${accent};
// //     border: 1px solid #ddd;
// //     font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
// //   }
// //
// //   video {
// //     max-width: 100%;
// //   }
// //
// //   p {
// //     margin-bottom: 2rem;
// //   }
// // `;
