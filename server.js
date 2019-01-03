'use strict';

const fs = require('fs');
const io = require('socket.io')(3000);

io.emit('file-saved', file);
