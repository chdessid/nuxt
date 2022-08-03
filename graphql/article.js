import gql from "graphql-tag";
export const singlearticle = gql`
  query event($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          name
          description
          devimages
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
