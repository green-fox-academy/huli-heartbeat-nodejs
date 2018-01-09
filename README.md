# huli-heartbeat-nodejs

'/heartbeat' endpoint which returns with a JSON if the database connection is established and with a status 500 ('Internal server error') if the connection is down. 

## Install
### Must need
npm package manager [installed](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)

To install the heartbeat package use `$ npm install greenfox-heartbeat --save-dev`
in command line. This will automatically add the package to your development dependencies in the package.json file as well.

## Usage
After installation open `config.js` and edit the server info.

Require the package with
```javascript
let heartbeat = require('./heartbeat')
```
and insert the '/heartbeat' endpoint
```javascript
app.get('/heartbeat', heartbeat(connection))
```

