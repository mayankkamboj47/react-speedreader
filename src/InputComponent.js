import React, {useState} from 'react';
import './css/inputComponent.css';
import {withTheme} from './withtheme';

function InputComponent({state, dispatch}){
    let defaultText = `
    Once upon a time, there was a prince. He fell in love with a beautiful mystery girl. 
    They danced all night at a party, but when the clock struck 12, the girl ran out of the palace, and went off into her 
    carriage, leaving a shoe on the stairs. The prince sent his servants out into the city, declaring he would marry whoever 
    the shoe fits. The girl's mother in law and stepsisters all try out the shoe but fail. The girl, who is imprisoned by the mother in law, 
    is asked to wear the shoe by the servants. It fits, and they get married and live happily ever after.
    `;
    let [localText,setLocalText] = useState(defaultText);
    const makeClass = withTheme(state.theme);

    return (<div className={makeClass('inputComponent')}>
        <input type='text' value={localText} onChange={(v)=>setLocalText(v.target.value)} />
        <input  type='button'
                value='Done' 
                onClick={()=>dispatch({words:flatten(localText)})} 
                className={makeClass('btn')}/>
        </div>
    );
}

/** Helper functions */
function flatten(text){
    return text.trim().split(/\s+/);
}
export default InputComponent;