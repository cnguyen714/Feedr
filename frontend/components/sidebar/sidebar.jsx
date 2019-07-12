
import React from "react";
import FeedsIndexContainer from "./feeds/feeds_index_container";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="sidebar" 
        className={`sidebar ${this.props.loggedIn ? "active" : "inactive"}`}>
        
        <ProtectedRoute component={FeedsIndexContainer} />
        
        <Link to="/discover">
          <footer>
              <div>Add Content</div>
          </footer>
        </Link>
      </div>
    );
  }
}

export default Sidebar;