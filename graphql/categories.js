import gql from "graphql-tag";
export const allArticlesByCategory = gql`
  query jaridaacategories {
    categories {
      data {
        id
        attributes {
          name
          articles {
            data {
              id
              attributes {
                name 
              description
              images
              }
            }
          }
        }
      }
    }
  }
`;
