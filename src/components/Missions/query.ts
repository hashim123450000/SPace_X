import { gql } from '@apollo/client';

export const MISSIONS_LISTS = gql`
    query LaunchList{
        launches {
        launch_year
        flight_number
        mission_name
        mission_id
        launch_success
        }
    }
`