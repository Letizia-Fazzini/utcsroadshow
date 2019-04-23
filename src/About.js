import React, { Component } from 'react';

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let whatwedo = "We go to local K-12 schools and give a thirty minute to one hour presentation to expose students to what Computer Science is, why Computer Science is important, and how kids can prepare for a career within Computer Science. Our presentation is suitable for students of all ages, and our hope is to get students excited about Computer Science!"
    let whatiscs = "We help introduce and teach the concept of Computer Science to kids with our presentation and with a group activity."
    let whycs = "We help introduce and teach the concept of Computer Science to kids with our presentation and with a group activity."
    let howtoprepare = "We also introduce local programs and camps that students can attend, and talk about what classes they can take before their college career."
    return (
      /*<div>
        <div>
          <h1>WHAT WE DO</h1>
          <p>{whatwedo}</p>
          <div>
            <img/>
            <h2>What is CS?</h2>
            <p>{whatiscs}</p>
          </div>
          <div>
            <img/>
            <h2>Why CS?</h2>
            <p>{whycs}</p>
          </div>
          <div>
            <img/>
            <h2>How to prepare?</h2>
            <p>{howtoprepare}</p>
          </div>
        </div>
      </div>*/
      <img id="logo" alt="logo" src="images/about.jpg" />
    );
  }
}
