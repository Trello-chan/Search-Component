# Trello-chan: Search Component

[![Node version](https://img.shields.io/badge/node-v8.12.0-blue.svg)](http://nodejs.org/download/)
[![NPM version](https://img.shields.io/badge/npm-6.4.1-blue.svg)](https://www.npmjs.com/get-npm/)
[![React version](https://img.shields.io/badge/react-v16.6.3-aqua.svg)]
[![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-v10.5-blue.svg)]
[![Webpack version](https://img.shields.io/badge/webpack-v4.28.0-brown.svg)]

Mock of Trello's search bar component feature broken up into its own microservice.  All the components are brought together by the Proxy Server

## Preview
...in progress.  To be uploaded by EOD June 7, 2019

## Features
- On load, queries for a random user from PostgreSQL DBMS hosted on AWS RDS
- On input tag click, view will change to allow user to search for cards.  Input will be matched with cards based on similarity, not exact equality
- On "Boards" click, will show random baords and allow user to search for boards based on input similarity
- The right side of the component will expand on click.
- CSS configured to resize based on browser width
