import './css/settingsmenu.css';
import { withTheme } from './withtheme';
function SettingsMenu({state,dispatch}){
    const makeClass = withTheme(state.theme);
    function ThemeOption({theme}){
        return <option onClick={(e)=>dispatch({theme:theme})}>
            {theme}
        </option>
    }
    return (
        <ol className={makeClass('settingsList')}>
             <Li label='Words at once'>
                   <input   type='number' 
                            min={1} 
                            value={state.wpv} 
                            onChange={(e)=>
                                dispatch({wpv:parseInt(e.target.value)})
                            }/>
             </Li>
             <Li label='Speed (wpm)'>
                    <input  type='number' 
                            min={60} 
                            value={state.speed} 
                            onChange={(e)=>
                                dispatch({speed:parseInt(e.target.value)})
                            }/>
             </Li>
             <Li label='Theme'>
                    <select value={state.theme}>
                            <ThemeOption theme='light' />
                            <ThemeOption theme='dark' />
                    </select>
             </Li>
    </ol>);
}
function Li(props){
    return (<li>
                <label>
                    {props.label}
                    {props.children}
                </label>
          </li>);
}

export default SettingsMenu;