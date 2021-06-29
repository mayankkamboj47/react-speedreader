import PlayControls from './PlayControls';

function WordDisplay({state,dispatch}){
    let words = state.words.slice(state.position,state.position+state.wpv);
    return (<div className='worddisplay'>
    <div className='words'>
    {words.join(' ')}
    </div>
    <PlayControls dispatch={dispatch} state={state}/>
    </div>
    );
}

export default WordDisplay;