
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
// import FollowSourceModalContainer from "./follow_source_modal/follow_source_modal_container";
import SourceFormItem from "./source_form_item";

class SourceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedSources: null,
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false,
      source: {
        stream_url: ""
      }
    }
    
    this.handleSubmitSource = this.handleSubmitSource.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
  }

  componentDidMount() {
    if (this.props.errors.length !== 0) this.props.dropErrors();

    $.getJSON('/api/search_source?q=' + this.state.source.stream_url)
      .then(response => this.setState({ autoCompleteResults: response.items }))
      .then(() => {
        this.autocomplete(document.getElementById("myInput"), this.state.autoCompleteResults);
      })
  }

  handleSubmitSource(e) {
    if (e) e.preventDefault();
    if (this.props.errors.length !== 0) this.props.dropErrors();

    $.ajax()
      .then(() => this.props.createSource(this.state.source))
      .then(payload => {
        if (Array.isArray(payload.source.sources)) {
          this.setState({ searchedSources: payload.source.sources })
        } else {
          this.setState({searchedSources: [payload.source.sources]})
        }
        if(payload.source.errors) {
          this.props.pushErrors(payload.source.errors);
        }
      },
      errors => this.props.pushErrors(errors));
  }

  handleInput(type) {
    return (e) => {
      let nextState = Object.assign({}, this.state)
      nextState.source[type] = e.target.value;
      nextState.searchedSources = null;

      this.setState(nextState, () => {
        $.getJSON('/api/search_source?q=' + this.state.source.stream_url)
          .then(response => this.setState({ autoCompleteResults: response.items }))
        });
    };
  }

  handleAutoComplete(name) {
    return (e) => {
      let nextState = Object.assign({}, this.state)
      nextState.source.stream_url = name;

      this.setState(nextState, () => {
        $.getJSON('/api/search_source?q=' + this.state.source.stream_url)
          .then(response => this.setState({ autoCompleteResults: response.items }))
          .then(this.handleSubmitSource(e));
      });
    }
  }

  autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "autocomplete-child");
          /*make the matching letters bold:*/
          // b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
          // b.innerHTML += arr[i].name.substr(val.length);
          b.innerHTML = `${arr[i].name}`;
          // b.innerHTML = `<p class="autocomplete-child">${arr[i].name}</p>`;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
          // b.innerHTML += `<h3 class="autocomplete-child">${arr[i].stream_url}</h3>`;
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", (e) => {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (this.state.source.stream_url === "") return;
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        } else {
          // if (x) x[0].click();
          this.handleSubmitSource(e);
        }
      }
    });
    
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });

    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    const closeAllLists = (elmnt) => {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
      if (elmnt && elmnt.classList.contains("autocomplete-child") && this.state.source.stream_url !== "") {
        let nextState = Object.assign({}, this.state);
        nextState.source.stream_url = elmnt.textContent;
        this.setState(nextState);
        this.handleSubmitSource();
      }
    }
  }

  render() {
    let sources = this.state.searchedSources;

    return (
      <div className="discover-form">
        <header>
          Discover the best sources for any topic
        </header>

        <form autoComplete="off" onSubmit={this.handleSubmitSource}>
          <div className="search-form-wrapper">
            <input 
              id="myInput"
              className="input-text-discover"
              type="text" 
              placeholder="Search by Name or RSS/Atom link"
              value={this.state.source.stream_url}
              onChange={this.handleInput("stream_url")}
              />
            <ul className="auto-complete-list"></ul>
            <i className="material-icons search">search</i>
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

        { sources !== null
          ? <ul>
              {sources.map(source =>
                <SourceFormItem 
                  key={`source-form-${source.id}`} 
                  source={source}
                ></SourceFormItem>
              )}
            </ul>
          : null
        }
      </div>
    );
  }
}

export default SourceForm;