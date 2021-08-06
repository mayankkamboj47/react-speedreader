
function NewButton({dispatch}){
    let onClick = ()=>dispatch({words:[],position:0});
    return (<button className='button-new' onClick={onClick}>
    New
    </button>);
}

export default NewButton;