
import React from "react";
import FeedsIndexContainer from "./feeds/feeds_index_container";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="sidebar" 
        className={`sidebar ${this.props.loggedIn ? "active" : "inactive"}`}>
        
        <ProtectedRoute component={FeedsIndexContainer} />
        
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