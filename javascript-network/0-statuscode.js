#!/usr/bin/node
const requ = require('request')

const url = process.argv[2]

requ.get(url, { encoding: 'utf-8'})
    .on('responce', responce => {
        console.log("code: ", responce.statuscode)
    })