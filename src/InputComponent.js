import React, {useState} from 'react';
function InputComponent({dispatch}){
    let defaultText = 'A quick brown fox jumps over a lazy pig.';
    let [localText,setLocalText] = useState(defaultText);
    return (<React.Fragment>
        <input type='text' value={localText} onChange={(v)=>setLocalText(v.target.value)} />
        <input type='button' value='Done' onClick={()=>dispatch({words:localText.split(' ')})} />
        </React.Fragment>
    );
}

export default InputComponent;