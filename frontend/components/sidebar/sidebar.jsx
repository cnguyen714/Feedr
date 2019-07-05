
import React from "react";
import FeedsIndexContainer from "./feeds/feeds_index_container";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="sidebar" 
        className={`sidebar ${this.props.loggedIn ? "active" : "inactive"}`}>

        <header>
          FEEDS
        </header>

        <FeedsIndexContainer />
        
        <footer>
          <ul>
            <div>Add Content</div>

          </ul>
        </footer>
      </div>
    );
  }
}

export default Sidebar;