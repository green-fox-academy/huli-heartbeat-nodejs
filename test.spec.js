'use strict'

const request = require('supertest')
const express = require('express')
const mysql = require('mysql')
const config = require('./config')
const heartbeat = require('./index')
const app = express()
const happ = express()

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
            .expect(200, {
                result: 'okay'
            })
            .then(function(){
                done()
            })
            .catch(err => {
                done(err)
            })
        })
    })

let connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'babanahammock',
    database: 'necronomicon'
})

happ.get('/heartbeat', heartbeat(connect))

describe('GET /heartbeat', function() {
    it('should respond when database is down', function(done) {
        request(happ)
            .get('/heartbeat')
            .expect(500)
            .then(function(){
                done()
            })
            .catch(err => {
                done(err)
            })
        })
    })
    