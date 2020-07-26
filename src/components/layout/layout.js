/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Global } from "@emotion/core"

import { globalStyles } from "utils/styles/global"
import { breakpointGutter } from "utils/styles"

import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

// import Banner from "./banner"
// import Navigation from "./navigation"
// import MobileNavigation from "./navigation-mobile"
// import SiteMetadata from "./site-metadata"
// import SkipNavLink from "./skip-nav-link"
// import "../assets/fonts/futura"

// export function DefaultLayout({ location, children }) {
//   // // if (location.state?.isModal) {
//   //   return (
//   //     <>
//   //       {
//   //       // <SiteMetadata pathname={location.pathname} />
//   //       }
//   //       {children}
//   //     </>
//   //   )
//   // // }
//
//   return (
//     <>
//       <Global styles={globalStyles} />
//       {
//       // <SiteMetadata pathname={location.pathname} />
//       // <SkipNavLink />
//       // <Banner />
//       // <Navigation pathname={location.pathname} />
//       }
//       <div
//         className={`main-body docSearch-content`}
//         sx={{
//           px: `env(safe-area-inset-left)`,
//           pt: t => t.sizes.bannerHeight,
//           // make room for the mobile navigation
//           pb: t => t.sizes.headerHeight,
//           [breakpointGutter]: {
//             pt: t => `calc(${t.sizes.bannerHeight} + ${t.sizes.headerHeight})`,
//             pb: 0,
//           },
//         }}
//       >
//         {children}
//       </div>
//       {
//       // <MobileNavigation />
//       }
//     </>
//   )
// }

export function Layout({ data, children }) {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} />
        {children}
    </div>
  )
}

// export const Layout = ({ data, children }) => (
//   <div>
//     <GlobalStyle />
//     <Head />
//     <Header title={data.site.siteMetadata.siteTitle} />
//     {children}
//   </div>
// );

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
// import Head from 'components/head';
// import Header from 'components/header';
// import GlobalStyle from 'global.css.js';
//
// const Layout = ({ data, children }) => (
//   <div>
//     <GlobalStyle />
//     <Head />
//     <Header title={data.site.siteMetadata.siteTitle} />
//     {children}
//   </div>
// );
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   data: PropTypes.object.isRequired,
// };
//
// const LayoutWithQuery = props => (
//   <StaticQuery
//     query={graphql`
//       query LayoutQuery {
//         site {
//           siteMetadata {
//             siteTitle
//           }
//         }
//       }
//     `}
//     render={data => <Layout data={data} {...props} />}
//   />
// );
//
// LayoutWithQuery.propTypes = {
//   children: PropTypes.node.isRequired,
// };
//
// export default LayoutWithQuery;



// import React from 'react';
// import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
// import Head from 'components/head';
// import Header from 'components/header';
// import GlobalStyle from 'global.css.js';
//
// const Layout = ({ data, children }) => (
//   <div>
//     <GlobalStyle />
//     <Head />
//     <Header title={data.site.siteMetadata.siteTitle} />
//     {children}
//   </div>
// );
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   data: PropTypes.object.isRequired,
// };
//
// const LayoutWithQuery = props => (
//   <StaticQuery
//     query={graphql`
//       query LayoutQuery {
//         site {
//           siteMetadata {
//             siteTitle
//           }
//         }
//       }
//     `}
//     render={data => <Layout data={data} {...props} />}
//   />
// );
//
// LayoutWithQuery.propTypes = {
//   children: PropTypes.node.isRequired,
// };
//
// export default LayoutWithQuery;
