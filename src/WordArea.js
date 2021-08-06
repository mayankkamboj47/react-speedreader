import SettingsMenu from './SettingsMenu';
import Slider from "./Slider";
import NewButton from './NewButton';
import WordDisplay from './WordDisplay';
import './css/wordarea.css';
import {withTheme} from './withtheme';

function WordArea({state,dispatch}){
    const makeClass = withTheme(state.theme);
    return (<div className={makeClass('wordarea')}>
        <NewButton dispatch={dispatch} />
        <WordDisplay dispatch={dispatch} state={state} />
        <Slider state={state}>
            <SettingsMenu state={state} dispatch={dispatch} />
        </Slider>
    </div>);
}

export default WordArea;