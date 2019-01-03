'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('file-error', (payload) => {
  console.log('We got a problem here BUDDY!!!!', payload);
});

socket.on('file-saved', () => {
  console.log(`${file} saved`);
})