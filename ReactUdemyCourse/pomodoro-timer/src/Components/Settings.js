import ReactSlider from 'react-slider';
import './Settings.css';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

export function Settings()
{
    const settingsInfo = useContext(SettingsContext);
    return(
        <div className="project-font">
            <label>Work Minutes : {settingsInfo.workMinutes}:00</label>
            <div style={{width:"30rem", margin:"auto"}}>
                <ReactSlider
                    className='slider project-font'
                    trackClassName='track'
                    thumbClassName='thumb'
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={60}
                />
            </div>
            <label>Break Minutes : {settingsInfo.breakMinutes}:00</label>
            <div style={{width:"30rem", margin:"auto"}}>
                <ReactSlider
                    className='slider project-font'
                    trackClassName='track'
                    thumbClassName='thumb'
                    value={settingsInfo.breakMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={60}
                />
            </div>
            <BackButton onClick={()=> settingsInfo.setShowSettings(false)}/>
        </div>
    );
}

export default Settings;