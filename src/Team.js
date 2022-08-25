import React, { Component } from 'react';
import './team.css';

export default class Team extends Component {
  render() {
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "David", position: "President", url: "images/officers/david.jpg"},
      { name: "Faiza", position: "Vice President", url: "images/officers/faiza.jpg"},
      { name: "Proma", position: "Finance", url: "images/officers/proma.jpg"},
      { name: "Allen", position: "Events", url: "images/officers/allen.jpg"},
      { name: "Shruti", position: "Events", url: "images/officers/shruti.jpg"},
      { name: "Letizia", position: "Tech", url: "images/officers/letizia.jpg"},
      { name: "Kunal", position: "Curriculum", url: "images/officers/kunal.jpg"},
      { name: "Asim", position: "Curriculum", url: "images/officers/asim.jpg"},
      { name: "Peyton", position: "Operations", url: "images/officers/peyton.jpg"},
      { name: "Varsha", position: "Marketing", url: "images/officers/varsha.jpg"},
      { name: "Vibhuti", position: "Recruitment", url: "images/officers/vibhuti.jpg"},
      { name: "Jake", position: "Recruitment", url: "images/officers/jake.jpg"},
      { name: "Bill Bulko", position: "Faculty Advisor", url: "images/officers/bulko.jpg"},
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
