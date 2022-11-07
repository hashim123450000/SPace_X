import { gql } from '@apollo/client';

export const MISSION_INFO = gql`
query LaunchInfo($id: String!) {
    launch(id: $id) {
        flight_number
        mission_id
        mission_name
        launch_year
        launch_success
        details
        launch_site {
          site_name
        }
        rocket {
          rocket_name
          rocket_type
        }
        links {
          flickr_images
        }
    }
  }
`