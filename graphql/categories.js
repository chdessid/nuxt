import gql from "graphql-tag";
export const allArticlesByCategory = gql`
  query jaridaacategories {
    categories {
      data {
        attributes {
          name
          articles {
            data {
              id
              attributes {
                name 
              description
              devimages
              }
            }
          }
        }
      }
    }
  }
`;
