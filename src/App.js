import './css/App.css';
import React from 'react';
import InputComponent from './InputComponent';
import WordReader from './WordReader';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wpv : 1,
      speed : 200,
      words : '',
      position:0,
      timer : null
    };
    this.dispatch = this.dispatch.bind(this);
  }
  dispatch(object){
    this.setState(object);
  }
  render(){
    let component;
    if(this.state.words.length===0){
      component = <InputComponent dispatch={this.dispatch}/>
    } 
    else component = <WordReader state={this.state} dispatch={this.dispatch}/>
    return (<div>
      {component}
      </div>);
  }
}

export default App;
