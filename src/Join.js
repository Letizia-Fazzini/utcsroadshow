import React, { Component } from 'react';

export default class Join extends Component {
  constructor(props){
    super(props)
  }

  render() {

    let jointext = "We're looking for committed UT students to help us make our team even better! Whether you're interested in gaining real experience creating content for the materials team, or enhancing your speech skills with the presentations team, we'd love to have you! Fill out the form below to be added to our email list.";

    return (  
      <div>
        <h1>INTERESTED IN JOINING?</h1>
        <p>{jointext}</p>
        <a href="https://www.facebook.com/groups/549689365148387/events/">Join the Facebook group!</a>
      </div>
    );
  }
}
