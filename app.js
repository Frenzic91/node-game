//////////////
// net code //
//////////////

// loads http module and instantiates a server
var app = require('http').createServer(get_handler);
// attaches the io API to our http server
var io = require('socket.io')(app);
// load file system module
var fs = require('fs');


var port = 3000;
/* http server listening on port 3000 */
app.listen(port, '0.0.0.0');
console.log('Server is listening on port %s...', port);

///////////////
// functions //
///////////////

/* the function to be called on incoming GET requests */
function get_handler (req, res) {
	/* parses the html file to be sent to the client,
	loading the content into variable data */
	fs.readFile(__dirname + '/source/client/client.html',
	/* function called after parsing, sends contents of
	html if no error */
	function f0 (err, data) {
		if (err) {
			// send error code 500 (error)
			res.writeHead(500);
			/* send the error message and return to prevent
			code below from executing */
			return res.end('Error loading index.html');
		}
		// send error code 200 (ok)
		res.writeHead(200);
		// send the html data to the client
		res.end(data);
	});
}