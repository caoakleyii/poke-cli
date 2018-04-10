const EventEmitter = require('events');
const fetch = require('node-fetch')
const User = require('./lib/user')
var net = require('net');
 
var users  = [];
 
/*
 * Method executed when a socket ends
 */
function closeSocket(socket) {
	var i = users.indexOf(socket);
	if (i != -1) {
		sockets.splice(i, 1);
	}
}
 
/*
 * Callback method executed when a new TCP socket is opened.
 */
function newSocket(socket) {

    var user = new User(socket);
    users.push(user);

	user.writeLine('Welcome to the poke-cli server!\r\n');
    user.writeLine('Choose to login or register.');
    user.writeLine('@Login or @Register \r\n')


    socket.on('data', function(data) {
		user.receiveData(data);
    });
    
	socket.on('end', function() {
		closeSocket(socket);
	});
}
 
// Create a new server and provide a callback for when a connection occurs
var server = net.createServer(newSocket);
 
// Listen on port 8888
server.listen(8888);

console.log("Poke CLI Server started on 8888")