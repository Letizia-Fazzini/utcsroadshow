import React, { Component } from 'react';
import './team.css';

export default class Team extends Component {
  render() {
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "Faiza", position: "President", url: "images/officers/FaizaRahman.jpg"},
      { name: "Allen", position: "Vice President", url: "images/officers/AllenTing.jpg"},
      { name: "David", position: "Finance", url: "images/officers/DavidTang.jpg"},
      { name: "Taara", position: "Events", url: "images/officers/TaaraBhaskaruni.jpg"},
      { name: "Sujitha", position: "Events", url: "images/officers/SujithaSeenivasan.jpg"},
      { name: "Peyton", position: "Marketing", url: "images/officers/PeytonAusburn.jpg"},
      { name: "Letizia", position: "Tech", url: "images/officers/letizia.jpg"},
      { name: "Kunal", position: "Curriculum", url: "images/officers/KunalMody.jpg"},
      { name: "Bill Bulko", position: "Faculty Advisor", url: "images/officers/DrBulko.jpg"},
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
