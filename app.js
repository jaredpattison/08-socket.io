'use strict';

const fs = require('fs');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

// io.on('connection', (socket) => {

//   console.log('New connection', socket.id);

// })


const alterFile = (file) => {
  console.log('in alter file, file:', file);

  // console.log('socket.id', )
  // socket.broadcast.emit('file-saved', file);
  // fs.readFile( file, (err, data) => {
  //   if(err) { 
  //     // socket.broadcast.emit('file-error', err); 
  //   }
  //   let text = data.toString().toUpperCase();
  //   fs.writeFile( file, Buffer.from(text), (err, data) => {
  //     if(err) { 
  //       // socket.broadcast.emit('file-error', err);
  //      }
  //     socket.broadcast.emit('file-saved', file);
  //   });
  // });
};

let file = process.argv.slice(2).shift();
console.log('process.argv:', process.argv);
console.log('file:', file)
alterFile(file);
