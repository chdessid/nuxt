import gql from "graphql-tag";
export const allArticles = gql`
  query jaridaaarticles {
    articles {
      data {
        id
        attributes {
          name
          devimages
          slug
        }
      }
    }
  }
`;
