import React, { Component } from 'react';
import './team.css';

export default class Team extends Component {
  render() {
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "Grace", position: "President", url: "images/officers/grace.jpeg" },
      { name: "Katherine", position: "Vice President", url: "images/officers/katherine.jpg" },
      { name: "Michelle", position: "Vice President", url: "images/officers/michelle.jpg" },
      { name: "Bronson", position: "Events", url: "images/officers/bronsonz.jpg" },
      { name: "Sejal", position: "Events", url: "images/officers/sejal.jpeg" },
      { name: "Nila", position: "Technology", url: "images/officers/nila.jpg" },
      { name: "Noah", position: "Curriculum", url: "images/officers/noah.jpg" },
      { name: "Syed", position: "Finance", url: "images/officers/syed.jpg" },
      { name: "Siddhi", position: "Operations", url: "images/officers/siddhi.jpg" },
      { name: "Preeti", position: "Recruitment", url: "images/officers/preeti.jpg" },
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
