import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.aboutClick = this.aboutClick.bind(this)
    this.homeClick = this.homeClick.bind(this);
    this.eventsClick = this.eventsClick.bind(this);
    this.teamClick = this.teamClick.bind(this);
    this.joinClick = this.joinClick.bind(this);
  }
  homeClick(event){
    event.preventDefault();
    this.props.callBackParent('Entry');
  }
  aboutClick(event){
    event.preventDefault()
    this.props.callBackParent('About');
  }
  eventsClick(event){
    event.preventDefault()
    this.props.callBackParent('Events');
  }
  teamClick(event){
    event.preventDefault()
    this.props.callBackParent('Team');
  }
  joinClick(event){
    event.preventDefault()
    this.props.callBackParent('Join');
  }
  //TODO: figure out what's going on with img id logo
  render() {
    return (
      <header>
        <nav>
          <div className="nav-elem"><a onClick = {this.aboutClick}>About</a></div>
          <div className="nav-circle">&#183;</div>
          <div className="nav-elem"><a onClick = {this.eventsClick}>Events</a></div>
          <div className="nav-circle">&#183;</div>
          <div className="nav-elem" onClick = {this.homeClick}>
            <img id="logo" alt="logo" src="images/logo.png" /> 
          </div>
          <div className="nav-circle">&#183;</div>
          <div className="nav-elem"><a onClick = {this.teamClick}>Team</a></div>
          <div className="nav-circle">&#183;</div>
          <div className="nav-elem"><a onClick = {this.joinClick}>Join</a></div>
        </nav>
      </header>
    );
  }
}
