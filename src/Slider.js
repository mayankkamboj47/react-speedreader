import {useState} from 'react';
import './css/Slider.css';

function Slider({children}){
    let [open,set] = useState(false);
    return (
    <div className='slider'>
    <div className='slider-items' onClick={(e)=>{e.stopPropagation()}}>
    {open ? children : ''}
    </div>
    <button className='slider-button'  onClick = {()=>set(!open)}>Settings</button>
    </div>
    )
};

export default Slider;