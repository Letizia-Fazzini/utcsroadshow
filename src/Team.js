import React, { Component } from 'react';
import './team.css';

export default class Team extends Component {
  render() {
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "Katherine", position: "Co-President", url: "images/officers/katherine.jpg" },
      { name: "Michelle", position: "Co-President", url: "images/officers/michelle.jpg" },
      { name: "Bronson", position: "Events", url: "images/officers/bronsonz.jpg" },
        { name: "Faiza", position: "Events", url: "images/officers/faiza.png" },
      { name: "Siddhi", position: "Operations", url: "images/officers/siddhi.jpg" },
      { name: "Preeti", position: "Marketing", url: "images/officers/preeti.jpg" },
        { name: "David", position: "Curriculum", url: "images/officers/david.png" },
        { name: "Proma", position: "Finance", url: "images/officers/proma.jpg" },
      { name: "Bill Bulko", position: "Faculty Advisor", url: "images/officers/bulko.jpg" },
    ];

    return (
      <div>
        <h1>OUR TEAM</h1>
        <div className="officers">
          {
            officers.map((officerProps) =>
              <OfficerCard {...officerProps}></OfficerCard>
            )
          }
        </div>

        <h1>CONTACT US</h1>
        <p id="team-contact">For general questions and inquiries, contact <a href="mailto:utcsroadshow@gmail.com"> utcsroadshow@gmail.com.</a></p>
      </div>
    );
  }
}

function OfficerCard(props) {
  return (
    <div className="officer-card">
      <img className="officer-photo" src={props.url}/>
      <h4 className="officer-name">{props.name}</h4>
      <div className="officer-position">{props.position}</div>
    </div>
  );
}
