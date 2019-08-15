
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import FollowSourceModalContainer from "./follow_source_modal/follow_source_modal_container";

class SourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: null,
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false,
      source: {
        stream_url: ""
      }
    }
    
    $.getJSON('/api/search_source?q=' + this.state.source.stream_url)
      .then(response => this.setState({ autoCompleteResults: response.items }))

    this.handleSubmitSource = this.handleSubmitSource.bind(this)
  }

  componentWillMount() {
    if (this.props.errors.length !== 0) this.props.dropErrors();
  }

  handleSubmitSource(e) {
    e.preventDefault();
    if (this.props.errors.length !== 0) this.props.dropErrors();

    $.ajax()
      .then(() => this.props.createSource(this.state.source))
      .then(payload => this.setState({searched: payload.source}),
      errors => this.props.pushErrors(errors));
  }

  handleInput(type) {
    return (e) => {

      let nextState = Object.assign({}, this.state)
      nextState.source[type] = e.target.value;

      this.setState(nextState, () => {
        $.getJSON('/api/search_source?q=' + this.state.source.stream_url)
          .then(response => this.setState({ autoCompleteResults: response.items }))
        });
    };
  }

  render() {
    let source = this.state.searched;

    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        <h2>{response.name}</h2>
        <p>{response.stream_url}</p>
      </div>;
    });

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
              placeholder="Search by RSS/Atom link"
              value={this.state.source.stream_url}
              onChange={this.handleInput("stream_url")}
              />
              <i className="material-icons search">search</i>
              { autoCompleteList }
          </div>
          <input type="submit" style={{display: "none"}} />
        </form>

        {this.props.errors.length !== 0
          ? <ul className="errors">
            {this.props.errors.map(error =>
              <li key={error}>{error}</li>
            )}
          </ul>
          : null
        }  

        { source !== null
          ? <div className="search-match">
              {/* <img src={source.icon_url} /> */}
              <div className="search-body">
                <h1>{source.name}</h1>
                <h2>{source.source_url}</h2>
                <p>{source.description}</p>
                <br />
              </div>
              <FollowSourceModalContainer source={source}/>  
            </div>
          : null
        }
      </div>
    );
  }
}

export default SourceForm;