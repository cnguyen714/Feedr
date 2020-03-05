
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

        <footer id="footer">
          Keep in touch
          <ul className="icons">
            <li><a
              href="https://github.com/cnguyen714">
              <i className="icon fab fa-github"></i>
              </a></li>
            <li><a
              href="https://www.linkedin.com/in/cdnguyen714/">
              <i className="icon fab fa-linkedin-in"></i>
              </a></li>
            <li><a
              href="https://angel.co/calvin-nguyen-2">
              <i className="icon fab fa-angellist"></i>
              </a></li>
            <li><a 
              href="mailto:calvindnguyen714@gmail.com">
              <i className="icon fas fa-envelope"></i>
              </a></li>
            <li><a 
              href="https://docs.google.com/document/d/1PDJEhGBPwgXqI44NVkrDE0Oyb1MkzHG6TUREMHM_-Mo/edit?usp=sharing">
              <i className="icon fas fa-file"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Splash;