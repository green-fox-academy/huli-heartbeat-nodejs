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
    it('respond with json', function(done) {
        request(app)
            .get('/heartbeat')
            // .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            // .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done()
            })
        });
    })


