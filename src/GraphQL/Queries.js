import { gql } from "@apollo/client";

export const SEARCH_ARTIST_QUERY = gql`
  query Artist($byName: String!) {
    queryArtists(byName: $byName) {
      name
      id
      image
      albums {
        name
        id
        image
      }
    }
  }
`;
