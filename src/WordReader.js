import {Fragment} from 'react';
import WordArea from './WordArea';
import WordSeeker from './WordSeeker';
import { withTheme } from './withtheme';

function WordReader({state,dispatch}){
    const makeClass = withTheme(state.theme);
    const wordSeekerContainer = makeClass('word-seeker-container');
    const tooltip = makeClass('tooltip');
    return (<Fragment>
        <WordArea state={state} dispatch={dispatch}/>
        <div className={wordSeekerContainer}>
            <h1>Your text</h1>
            <p className={tooltip} onClick={(e)=>e.target.style.display='none'}
            >Click on any word to go to that position in the text</p>
            <WordSeeker state={state} dispatch={dispatch}/>
        </div>
        </Fragment>
        )
}

export default WordReader;