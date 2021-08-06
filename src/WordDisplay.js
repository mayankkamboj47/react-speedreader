import PlayControls from './PlayControls';
import {withTheme} from './withtheme';
function WordDisplay({state,dispatch}){
    const makeClass = withTheme(state.theme);
    let words = state.words.slice(state.position,state.position+state.wpv);
    return (<div className={makeClass('worddisplay')}>
    <div className='words'>
        {words.join(' ')}
    </div>
    <PlayControls dispatch={dispatch} state={state}/>
    </div>
    );
}

export default WordDisplay;