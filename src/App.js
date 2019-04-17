import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Header'
import Entry from './Entry'
import Contact from './Contact'
class App extends Component {
  constructor(props){
    super(props)
    this.state = ({active: "Entry"})
  }
  handler(arg) {
     this.setState({active: arg});
  }
  render() {
    var active = this.state.active;
    return (
      <div>
	  <div id = "banner" /> 
      <Header callBackParent = {(newActive) => this.handler(newActive)}/>
      {active === 'Entry' ? ( <Entry initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
       active === 'Contact' ? ( <Contact initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
    	null }
      </div>

    );
  }
}

export default App;
