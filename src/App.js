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
      timer : null,
      theme:'light'
    };
    this.dispatch = this.dispatch.bind(this);
  }
  dispatch(object){
    let specials = {
      'timer':this.toggleTimer,
      'speed':this.setSpeed
    }
    for(let action in object){
      if(action in specials){
        specials[action].bind(this)(object[action]);
        delete object[action];
      }
    }
    if(JSON.stringify(object)!=='{}')
      this.setState(object);
  }
  toggleTimer(){
    if(this.state.timer){
      clearInterval(this.state.timer);
      this.setState({timer:null});
    }
    else{
      this.setState({
        timer : setInterval(()=>{
        this.setState({position:this.state.position+this.state.wpv});
        if(this.state.position>this.state.words.length){
          this.toggleTimer();
        }
      },60000*this.state.wpv/this.state.speed)});
    }
    /*
    60000*wpv/wpm. Q : What does it take for adjusting speed on the fly ? 
    */
  }
  setSpeed(newspeed){
    if(this.state.timer) this.toggleTimer();
    this.setState({speed:newspeed});
  }
  render(){
    let component;
    if(this.state.words.length===0){
      component = <InputComponent dispatch={this.dispatch} state={this.state}/>
    } 
    else component = <WordReader state={this.state} dispatch={this.dispatch}/>
    return (<div>
      {component}
      </div>);
  }
}

export default App;
