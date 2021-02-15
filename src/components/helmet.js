import { graphql,StaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
        <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
      <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
  )
};



// export default () => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query HelmetQuery {
//           site{
//             siteMetadata{
//               title
//             }
//           }
//         }
//       `}
//       render={data => (
//         <HelmetProvider>
//         <Helmet>
//         <title>{data.site.siteMetadata.title}</title>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
//         />
//         <link
//           href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
//           rel="stylesheet"
//         />
//       </Helmet>
//       </HelmetProvider>
//       )}
//       ></StaticQuery>
//   );
// };
