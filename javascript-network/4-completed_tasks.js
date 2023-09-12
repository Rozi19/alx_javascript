#!/usr/bin/node

const requ = require("request");
const url = process.argv[2]


requ.get(url, function (error, response, body) {
    
    const tasks = JSON.parse(body)
    const completedTasksByUser = {};
    tasks.forEach((task) => {
        if (task.completed) {
          if (completedTasksByUser[task.userId]) {
            completedTasksByUser[task.userId]++;
          } else {
            completedTasksByUser[task.userId] = 1;
          }
        }
      });
      console.log(completedTasksByUser); 
})

