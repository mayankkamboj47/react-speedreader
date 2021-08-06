import React from 'react';
import Word from './Word';
import './css/wordseeker.css';
function WordSeeker({state,dispatch}){
    return (
        <div className='wordseeker'>   
        {state.words.map((word,index)=>
            (<Word state={state} dispatch={dispatch} index={index} key={word+index} />)
        )}
        </div>
    );
}
export default WordSeeker;
