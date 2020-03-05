import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul className="icons">
          <li><a title="Github"
            href="https://github.com/cnguyen714">
            <i className="icon fab fa-github"></i>
          </a></li>
          <li><a title="Linked-In"
            href="https://www.linkedin.com/in/cdnguyen714/">
            <i className="icon fab fa-linkedin-in"></i>
          </a></li>
          <li><a title="Angel-List"
            href="https://angel.co/calvin-nguyen-2">
            <i className="icon fab fa-angellist"></i>
          </a></li>
          <li><a title="Email"
            href="mailto:calvindnguyen714@gmail.com">
            <i className="icon fas fa-envelope"></i>
          </a></li>
          <li><a title="Resume"
            href="https://docs.google.com/document/d/1PDJEhGBPwgXqI44NVkrDE0Oyb1MkzHG6TUREMHM_-Mo/edit?usp=sharing">
            <i className="icon fas fa-file"></i>
          </a>
          </li>
        </ul>

        <span className="copyright"> 
          - Calvin Nguyen 2020 -
        </span>
      </footer>
    );
  }
}

export default Footer;