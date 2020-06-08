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
      <form 
        action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSdGVhIPEFN5uH8Zcql4VlEC3SnGJlUvv-9EH-Yt1LeZIZoiug/formResponse"
        >
        <label for="name">Name *</label>
        <input name="entry.1385454639" type="text" id="name"/>
        <label for="phone">Phone Number *</label>
        <input name="entry.1626275741" type="text" id="phone"/>
        <label for="email">Email address *</label>
        <input name="entry.2027684475" type="text" id="email"/>
        <label for="school-name">School/Event Name *</label>
        <input name="entry.864891190" type="text" id="school-name"/>
        <label for="school-address">School/Event Address *</label>
        <input name="entry.89226394" type="text" id="school-address"/>
        <p>Audience age level *</p>
        <div className="schedule-form-radio">
          <input type="radio" name="entry.1192033064" id="elementary" value="Elementary School"/>
          <label className="schedule-form-radio-label" for="elementary">Elementary School</label>
        </div>
        <div className="schedule-form-radio">
          <input type="radio" name="entry.1192033064" id="middle" value="Middle School"/>
          <label className="schedule-form-radio-label" for="middle">Middle School</label>
        </div>
        <div className="schedule-form-radio">
          <input type="radio" name="entry.1192033064" id="high" value="High School"/>
          <label className="schedule-form-radio-label" for="high">High school</label>
        </div>
        <div className="schedule-form-radio">
          <input type="radio" name="entry.1192033064" id="other" value="__other_option__"/>
          <label className="schedule-form-radio-label" for="others">Other</label>
          <input id="schedule-form-other" name="entry.1192033064.other_option_response" type="text"></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
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

          <div id="schedule-form-card">
            <h1>Schedule a Visit</h1>
            <div id="schedule-form">
              {form}
            </div>
          </div>

        </div>
      </div>
    );

  }

}
