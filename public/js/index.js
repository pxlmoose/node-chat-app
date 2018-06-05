let socket = io();

socket.on('connect', function () { // replacing arrow func on html becouse it can crash on mobile
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'jane@example.com',
  //   text: 'hey, it me'
  // });

  socket.emit('createMessage', {
    from: 'user2',
    text: 'exaple text'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
