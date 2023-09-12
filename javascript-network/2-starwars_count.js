#!/usr/bin/node

const requ = require("request");
const url = process.argv[2]
requ.get(url, function (error, response, body) {
    
    const object = JSON.parse(body)
    const filter = object.results.filter(films => {
        return films.characters.includes("https://swapi-api.alx-tools.com/api/people/18/")
    })
    console.log(filter.length);
});