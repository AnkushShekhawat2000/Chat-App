const express = require('express');

// express is a fumction
// which give me a server when invoked

const server = express();

// cannot get -> no response from my server
// server.get method -> it takes 2 things
// 1st is sub route
// 2nd function which should this request
// empty route -> base url

server.get("/", function handleGetRequest(request, response){
    response.send('welcome to my server');
});

server.get('/accio', function handleAccioReq(request, response){
   response.send("helo from /accio");
});



// on which port my server should be active
server.listen(8888);