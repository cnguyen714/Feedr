
import React from "react";
import splashImage from 'assets/images/screenshot-web@2x.png';

class Splash extends React.Component {

  render() {
    return (
      <div id="title-splash">
        <div className="splash-wrapper">
          <section className="splash-header">
            <h1>Where readers become leaders</h1>
            <h2>
              Keep up with all the topics that matter to you. <br />
              All in one place.
          </h2>
          </section>

          <img className="splash-img" />
        </div>
      </div>
    );
  }
}

export default Splash;