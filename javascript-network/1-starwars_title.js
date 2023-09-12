#!/usr/bin/node

const requ = require("request");
const id = process.argv[2]
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

requ.get(url, function (error, response, body) {
    
    const object = JSON.parse(body)
        console.log(object.title)
});