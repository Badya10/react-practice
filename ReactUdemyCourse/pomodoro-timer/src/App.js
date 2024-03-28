import './App.css';
import Settings from './Components/Settings';
import { Timer } from './Components/Timer';
import { useState } from 'react';
import SettingsContext from './Components/SettingsContext';

function App() {
  const [showSettings,setShowSettings] = useState(false);
  const [workMinutes,setWorkMinutes] = useState(50);
  const [breakMinutes,setBreakMinutes] = useState(10);
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>  
    </main>
  );
}

export default App;
