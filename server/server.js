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

  // socket.emit('newEmail', {
  //   from: 'name@example.com',
  //   text: 'hello beautiful',
  //   createdAt: 123
  // });

  socket.emit('newMessage', {
    from: 'user1',
    text: 'sample message',
    createdAt: 246
  })

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up on ${port}`);
});

module.exports = {app};


//
// console.log(__dirname + '/../public');
// console.log(publicPath);
