<<<<<<< HEAD
import React, { Component } from 'react';
import './index.css';
import Header from './Header'
import Entry from './Entry'
import About from './About'
import Events from './Events'
import Contact from './Contact'
import Join from './Join'

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({active: "Entry"})
  }

  handler(arg) {
     this.setState({active: arg});
  }

  render() {
    let active = this.state.active;
    console.log(active);

    return (
      <div>
        <Header callBackParent = {(newActive) => this.handler(newActive)}/>
        <main>
          {active === 'Entry' ? ( <Entry initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
          active === 'About' ? ( <About initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
          active === 'Events' ? ( <Events initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
          active === 'Contact' ? ( <Contact initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
          active === 'Join' ? ( <Join initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
          null }
        </main>
        <Footer/>
      </div>

    );
  }

}

function Footer(props) {
  return (
    <div className={"footer"}>
      {"Contact Us:\nutcsroadshow@gmail.com\nGDC 3rd Floor - Outreach Office"}
    </div>
  );
}

export default App;
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Header'
import Entry from './Entry'
import About from './About'
import Events from './Events'
import Contact from './Contact'
import Join from './Join'

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
       active === 'About' ? ( <About initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
       active === 'Events' ? ( <Events initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
       active === 'Contact' ? ( <Contact initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
       active === 'Join' ? ( <Join initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
       null }
      </div>

    );
  }
}

export default App;
>>>>>>> 649e3a568893f170bd54f48d60abc6cca55cd15f
