const express = require('express');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;
const ipadress = "";

let SOCKET_LIST = {};

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/game.html");
});


io.on("connection", (socket)=>{
    //console.log("New connection: " + socket.id);
    socket.id = Math.random();
    socket.x = 0;
    socket.y = 0;
    SOCKET_LIST[socket.id] = socket;
    

});




http.listen(port, (err)=>{
    if (err){return console.log("Error Occured: ", err)}

    console.log(`server is listening on ${port}`);
});