
# Feedr, a [Feedly](https://feedly.com/) clone

[Feedr Live](https://feedr-fsp.herokuapp.com/)

## Keep track of all your feeds in one place!

Feedr is a web application for keeping track of RSS/Atom source feeds. Users can log in and add start adding their own feeds to keep track of.

* Feedr keeps track of all the sources users add
* Users can organize their sources inside feeds
* Feedr will display recent entries and have corresponding links to the content

## Technologies used

Feedr is a full stack application utilizing the following:

* PostgreSQL
	* Database for storing holding users' Feeds and Sources, and serve new Articles
  * [Schema](https://github.com/cnguyen714/Feedr/wiki/Schema)
* Ruby on Rails
	* Ruby framework to service API calls, returns responses in JSON 
  * [Backend Routes](https://github.com/cnguyen714/Feedr/wiki/Backend-Routes)
* NPM & Node.js
* React
  * Javascript library to prevent re-rendering of the webpage, website components are designed as React Components
  * [Frontend Routes](https://github.com/cnguyen714/Feedr/wiki/Frontend-Routes)
* Redux
  * Javascript library used to store window state and dynamically update components, such as the Feeds Sidebar
  * [Sample State](https://github.com/cnguyen714/Feedr/wiki/Sample-State)

## Features

<img align="right" src="https://github.com/cnguyen714/Feedr/blob/master/readme/sidebar.png">
### Feeds Sidebar

The sidebar provides easy navigation to all of a user's feeds and sources. Clicking on any of the sections will route the page and display the corresponding articles. It is driven by mainly by the FeedsIndex component, which is an index which contains Source indexes. 

```javascript
// feeds_index.jsx
class FeedsIndex extends React.Component {
  // ...

  render() {
    if (!this.props.feeds) return null; 

    return (
      <div className="feeds-index">
        <header>
          FEEDS
        </header>

        {this.props.loading 
          ? "Fetching Feeds..."
          : <ul>
              <Link to={`/`} >
                <header className="select feed-index-item feeds-source-index all-feed">
                    All
                </header>
              </Link>

              {this.props.currentUser.subscribedFeeds.map(feedId => (
                <FeedsSourceIndexContainer feed={this.props.feeds[feedId]} key={`feed-${feedId}`}/>
              ))}
            </ul>
        }
      </div>
    );
  }
}
```
Figuring out the HTML/CSS structure to format the sidebar too some work.

### 

### Future development
* Read/Unread status and counts
* Infinite scroll