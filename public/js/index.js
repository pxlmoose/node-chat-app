let socket = io();

socket.on('connect', function () { // replacing arrow func on html becouse it can crash on mobile
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
