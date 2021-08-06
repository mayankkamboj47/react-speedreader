import {useState} from 'react';
import './css/Slider.css';
import { withTheme } from './withtheme';

function Slider({state,children}){
    const makeClass = withTheme(state.theme);
    let [open,set] = useState(false);
    return (
    <div className={makeClass('slider')}>
    <div className={'slider-items'} onClick={(e)=>{e.stopPropagation()}}>
    {open ? children : ''}
    </div>
    <button className={makeClass('btn','slider-button')}  onClick = {()=>set(!open)}>Settings</button>
    </div>
    )
};

export default Slider;