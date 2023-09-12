#!/usr/bin/node

const requ = require('request')

const url = process.argv[2]

requ.get(url, { encoding: 'utf-8'})
.on('response', response => {
    console.log("Code:", response.statusCode)
}
);
