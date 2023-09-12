#!/usr/bin/node

const requ = require("request");
const id = process.argv[2]
const url = `https://swapi.dev/api/films/https://swapi-api.alx-tools.com/api/films/${id}`;
requ.get(url, { encoding: 'utf-8'})
.on('data', data => {
    const responce = JSON.parse(data);
    console.log(responce.title);
})