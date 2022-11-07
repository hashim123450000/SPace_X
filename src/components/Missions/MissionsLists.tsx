
import { LaunchListQuery } from './../../generated/graphql'
import "./index.css"

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}


interface Props  extends OwnProps{
    data : LaunchListQuery
}
const className = 'LaunchList';

const MissionsLists: React.FC<Props> = ({data , handleIdChange}) => {
    return(
        <div className={className}>
                <h4 >Launches</h4>
                {!!data.launches && data.launches.map((launchObj, ind) => !!launchObj &&(
                  <button type="button"  key={ind}  onClick={() => handleIdChange(launchObj.flight_number!)}
                   >{launchObj?.mission_name}</button>
                ))}
        </div>
    )
}

export default MissionsLists