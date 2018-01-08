const express = require('express')
const app = express()

function heartbeat(connection) {
    return function(req, res) {
        connection.query("SHOW TABLES;", function(error, result) {
            if (error) {
                res.status(500)
                // res.json(error)
                //res.status(500).json
            }
            res.json({result:"okay"})
        })
    }
}

module.exports = heartbeat
