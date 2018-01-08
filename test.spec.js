'use strict'

const request = require('supertest')
const express = require('express')
const mysql = require('mysql')
const config = require('./config')
const heartbeat = require('./index')
const app = express()

let connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

app.get('/heartbeat', heartbeat(connection))

describe('GET /heartbeat', function() {
    it('should respond with status', function(done) {
        request(app)
            .get('/heartbeat')
            .expect(200)
            .then(function(){
                done()
            })
            .catch(err => {
                done(err)
            })
        })
    })

// describe('GET /heartbeat', function() {
//     it('should respond when error', function(done) {
//         request(app)
//             .get('/heartbeat')
//             .expect(500)
//             .then(function(){
//                 done()
//             })
//             .catch(err => {
//                 done(err)
//             })
//         })
//     })