import { gql } from '@apollo/client'

export const SEARCH_ARTIST_QUERY = gql` 
{
  queryArtists(byName: "Olivia Rodrigo") {
    name
    id
    image
    albums {
      name
      id
      image
      tracks {
        id
        name
        preview_url
        artists {
          name
        }
      }
    }
  }
}
`;