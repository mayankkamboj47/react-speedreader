import React from 'react';
import { configure, shallow } from 'enzyme';
import { assert } from 'chai';
import App from './App';import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });describe('App component testing', function() {
  it('shows learn link', function() {
    const wrapper = shallow(<App />); 
    const welcome =        <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
    assert(wrapper.contains(welcome)===true);
  });
});
// Expect the opening screen to show : 
// A textbox with a default passage written inside of it
// A button
// A title that says 'Enter text to speedread'


// Expect the screen to show a word and 3 buttons when the button is clicked.
// Expect a second component to appear now.