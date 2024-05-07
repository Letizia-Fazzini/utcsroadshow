import React, { Component } from 'react';
import './join.css';

export default class Join extends Component {
  render() {
    const jointext = "We're looking for committed UT students to help us make our team even better. Whether you're interested in gaining real experience creating content for the materials team, or enhancing your speech skills with the presentations team, we'd love to have you!"
    return (
      <div>
        <div className="flex join">
          <div id="join-block">
            <h1>INTERESTED IN JOINING?</h1>
            <p>{jointext}</p>
            <a className="join-button" href="https://discord.gg/zJZ4CsZ43x">
              Join the Discord to see our upcoming events
            </a>
            <a className="join-button" href="https://forms.gle/VVVPCvmEXD3BpXFM9">
              Fill out Google Forms for our members list
            </a>
          </div>
        </div>
      </div>

    );
  }
}
