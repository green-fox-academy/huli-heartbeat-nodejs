'use strict'

const app = require ('./server')
const request = require('supertest')
const express = require('express')

describe('GET /heartbeat', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/heartbeat')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            // .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done()
            })
        });
})


