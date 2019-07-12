
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



### Future development
* Read/Unread status and counts
* Infinite scroll