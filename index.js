const express = require('express');
const app = express();

function heartbeat (connection) {
    return function (req, res) {
        connection.query("SHOW TABLES;", function(error, result) {
            if(error) {
                console.log(error.toString());
            }
            res.json({"Result":"okay"})
        })
    }
}

module.exports = heartbeat
