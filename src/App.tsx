import { SetStateAction, useCallback, useState } from 'react';
import './App.css';
import MissionContainer from './components/Missions/Index'
import MissionInfo from './components/Missions Info/Index'

function App() {

  const [id, setId] = useState(25);
  const handleIdChange = useCallback((newId: SetStateAction<number>) => {
    setId(newId);
  }, []);
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="list col-3  overflow-scroll">
          <MissionContainer handleIdChange={handleIdChange} />
        </div>
        <div className="list-info col-9 overflow-scroll">
          <MissionInfo  id={id} />
        </div>
      </div>
    </div>
  );
}

export default App;
