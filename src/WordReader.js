import {Fragment} from 'react';
import WordArea from './WordArea';
function WordReader({state,dispatch}){
    return (<Fragment>
        <WordArea state={state} dispatch={dispatch} />
        <div className=''>Seek area</div>
        </Fragment>
        )
}
export default WordReader;