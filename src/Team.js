import React, { Component } from 'react';

export default class Team extends Component {
  render() {
    // all officer photos should be square aspect ratio
    const officers = [
      { name: "Raychel", position: "President", url: "/images/raychel.jpg" },
      { name: "Ann", position: "Vice President", url: "/images/ann.jpg" },
      { name: "Sahil", position: "Finance", url: "/images/sahil.jpg" },
      { name: "Jenny", position: "Marketing", url: "/images/jenny.jpg" },
      { name: "Ella", position: "Events", url: "/images/ella.jpeg" },
      { name: "Nila", position: "Technology", url: "/images/nila.jpg" },
      { name: "Cole", position: "Curriculum", url: "/images/cole.jpg" },
      { name: "Siddhi", position: "Operations", url: "/images/siddhi.jpg" },
      { name: "Ria", position: "Recruitment", url: "/images/ria.jpeg" },
      { name: "Bill Bulko", position: "Faculty Advisor", url: "/images/bulko.jpg" },
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

        <h1>JOIN US</h1>
        <p>For general questions and inquiries, contact utcsroadshow@gmail.com.</p>
        <p><a href="https://www.facebook.com/groups/549689365148387/events/">Join the Facebook group!</a></p>

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
