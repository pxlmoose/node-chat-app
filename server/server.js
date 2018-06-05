const path = require('path'); //built in node module, doesn't need to be installed with npm
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');


  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {       //io. emmit -emits to all users
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up on ${port}`);
});
