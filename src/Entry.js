import React, { Component } from 'react';
import Typist from 'react-typist';
import './Typist.css'
import './style.css';
import './index.css';

export default class Entry extends Component {
  render() {
    const learnmore = (
      <div className="entry-button" id ="learn-more" onClick={() => this.props.callBackParent('About')}>
        <img src="images/learn_more.png"/>
      </div>
    );
      
    const joinus = (
      <div className="entry-button" id ="join-us" onClick={() => this.props.callBackParent('Join')}>
        <img src="images/join.png"/>
      </div>
    );

    const form = (
      <div id="schedule-form">
        <h1>Schedule a Visit</h1>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeDkaG6po6bIuzwayEe35EeHINJT-ceauxLaDdVYRrTCFvDGw/viewform?embedded=true" 
          height={600} frameBorder={0}>Loading...</iframe>
      </div>
    );

    return (
      <div>

        <div id="title-banner">
          <Typist className="typed-text">{"WE ARE UTCS ROADSHOW"}</Typist>

          <div id ="description">
            We visit local K-12 schools to introduce students to the world of computer science,
            and teach them about how they can get involved.
          </div>

          <div className="entry-button-container">
            {learnmore}
            {joinus}
          </div>

          <div>
            {form}
          </div>

        </div>
      </div>
    );

  }

}
