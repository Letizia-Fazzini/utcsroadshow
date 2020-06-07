import React, { Component } from 'react';
import './index.css';
import Header from './Header'
import Entry from './Entry'
import About from './About'
import Events from './Events'
import Team from './Team'
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
          active === 'Team' ? ( <Team initial = {this.state.active} callBackParent = {(newActive) => this.handler(newActive)} /> ) :
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
    <div className={"footer flex"}>
      <div>
        <h3>UTCS Roadshow</h3>
        <p>is an outreach organization dedicated to introducing computer science to grade schoolers around Austin.</p>
      </div>
      <div>
      <h3>Contact Us</h3>
        <p><a href="mailto:utcsroadshow@gmail.com">utcsroadshow@gmail.com</a></p>
        <p>University of Texas at Austin</p>
        <p>Gates Dell Complex, Room 3.314</p>
        <p>2317 Speedway, Austin, TX</p>
      </div>
    </div>
  );
}

export default App;