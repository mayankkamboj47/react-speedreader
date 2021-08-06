import {withTheme} from './withtheme';
function PlayControls({state,dispatch}){
    const step = 20;
    const goSlower = ()=>dispatch({speed:state.speed-step});
    const goFaster = ()=>dispatch({speed:state.speed+step});
    const toggleTimer = ()=>dispatch({'timer':1});
    const makeClass = withTheme(state.theme);
    return (
    <div className={makeClass('playControls')}>
        <button onClick={goSlower} 
                className={makeClass('btn','btn-slower')}
                data-text='Slower'>Slower</button>
        <button onClick={toggleTimer} 
                className={state.timer? makeClass('btn','btn-pause'):makeClass('btn','btn-play')}
                data-text={state.timer ? 'Pause' : 'Play'}>
            {state.timer ? 'Pause' : 'Play'}
        </button>
        <button onClick={goFaster} 
                className={makeClass('btn','btn-faster')}
                data-text='Faster'>Faster</button>
    </div>)
}
export default PlayControls;