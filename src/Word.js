function Word({state,dispatch,index}){
    let seekToWord = ()=>dispatch({position:index});
    let wordClass = getClass(state.position,index,state.wpv);
    return (<span className={wordClass} onClick={seekToWord}>
        {state.words[index]}
    </span>);
}
function getClass(position,index,wpv){
    if(position<=index && position+wpv > index){
        return 'word selected';
    }
    return 'word';
}
export default Word;