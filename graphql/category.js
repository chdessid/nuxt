import gql from "graphql-tag";
export const singleCategory = gql`
query event($id: ID!) {
  category (id: $id){
    data {
      attributes {
        name
        articles {
          data {
            id
            attributes {
              name
              description
              images
              slug
            }
          }
        }
      }
    }
  }
}
`;
