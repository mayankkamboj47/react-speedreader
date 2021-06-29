import SettingsMenu from './SettingsMenu';
import Slider from "./Slider";
import NewButton from './NewButton';
import WordDisplay from './WordDisplay';
import './css/wordarea.css';

function WordArea({state,dispatch}){
    return (<div className='wordarea'>
        <NewButton dispatch={dispatch} />
        <WordDisplay dispatch={dispatch} state={state} />
        <Slider>
            <SettingsMenu state={state} dispatch={dispatch} />
        </Slider>
    </div>);
}

export default WordArea;