import React, { Component } from 'react';
import './style.css';
import './events.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Events extends Component {
  render() {

    // these images should all be 16:9 ratio
    const images = [
      {
        original: 'images/events/2024/roadshow1.jpeg',
        thumbnail: 'images/events/2024/roadshow1.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow2.jpeg',
        thumbnail: 'images/events/2024/roadshow2.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow3.jpg',
        thumbnail: 'images/events/2024/roadshow3.jpg',
      },
      {
        original: 'images/events/2024/roadshow4.jpg',
        thumbnail: 'images/events/2024/roadshow4.jpg',
      },
      {
		    original: 'images/events/2024/roadshow6.jpeg',
        thumbnail: 'images/events/2024/roadshow6.jpeg',
      },
      {
        original: 'images/events/2024/roadshow7.jpeg',
        thumbnail: 'images/events/2024/roadshow7.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow8.jpeg',
        thumbnail: 'images/events/2024/roadshow8.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow9.jpeg',
        thumbnail: 'images/events/2024/roadshow9.jpeg',
      },
      {
        original: 'images/events/2024/roadshow10.jpeg',
        thumbnail: 'images/events/2024/roadshow10.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow11.jpeg',
        thumbnail: 'images/events/2024/roadshow11.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow12.jpeg',
        thumbnail: 'images/events/2024/roadshow12.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow13.jpeg',
        thumbnail: 'images/events/2024/roadshow13.jpeg',
      },
      {
		    original: 'images/events/2024/roadshow14.jpeg',
        thumbnail: 'images/events/2024/roadshow14.jpeg',
      },
    ];

    return (
      <div>
        <div id="events-gallery">
          <ImageGallery
            className={"gallery"}
            items={images}
            showBullets={true}
            showThumbnails={false}
            autoPlay={true}
          />
        </div>

        <div id="events-calendar-block">
          <h1>CALENDAR</h1>
          <div>
            <a href="https://www.facebook.com/groups/549689365148387/events/">
              Check out our events on Facebook.
            </a>
          </div>
          <iframe
            title="Events Calendar"
            src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=utcsroadshow%40gmail.com&amp;color=%2329527A&amp;ctz=America%2FChicago"
            width="800" height="600" frameBorder="0" scrolling="no">
          </iframe>
        </div>
      </div>
    );
  }
}
