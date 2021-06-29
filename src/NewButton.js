function NewButton({dispatch}){
    return (<button onClick={()=>dispatch({words:[]})}>
    New
    </button>);
}

export default NewButton;