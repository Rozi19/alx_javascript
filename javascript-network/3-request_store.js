#!/usr/bin/node

const requ = require("request");
const fs = require('fs');

const url = process.argv[2]
const filePath = process.argv[3]

requ.get(url, filePath, function (error, response, body) {
    
    fs.writeFileSync(filePath, body, { encoding: 'utf-8' });
    
})