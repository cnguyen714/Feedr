
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";


class SourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: {
        stream_url: ""
      }
    }
    
    this.handleSubmitSource = this.handleSubmitSource.bind(this)
  }

  handleSubmitSource(e) {
    e.preventDefault();

    this.props.createSource(this.state.source);
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.source[type] = e.target.value;

      this.setState(nextState);
    };
  }

  render() {

    return (
      <div className="discover-form">
        <header>
          Discover the best sources for any topic
        </header>

        <form onSubmit={this.handleSubmitSource}>
          <div className="search-form-wrapper">
            <input 
              className="input-text-discover"
              type="text" 
              placeholder="Search by RSS link"
              value={this.state.source.stream_url}
              onChange={this.handleInput("stream_url")}
              />
              <i className="material-icons search">search</i>
          </div>
          <input type="submit" style={{display: "none"}} />
        </form>
      </div>
    );
  }
}

export default SourceForm;