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
            <a className="join-button" href="https://www.facebook.com/groups/549689365148387/events/">
              Join the Facebook group to see our upcoming events
            </a>
            <a className="join-button" href="https://web.groupme.com/join_group/61142374/dRUy80Fj">
              Join the GroupMe group for communication
            </a>
            <a className="join-button" href="https://docs.google.com/forms/d/127Uoj9Ylwv31AgQPJLoOna_vpb-uv0Wx_R9r6PZqiN8">
              Fill out Google Forms for our members list
            </a>
          </div>

        </div>
      </div>

    );
  }
}
