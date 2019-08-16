
import React from "react";


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

          <img src="/assets/screenshot-web@2x.png" alt="splash-image" />
        </div>
      </div>
    );
  }
}

export default Splash;