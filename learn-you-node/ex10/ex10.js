var net = require('net'),
    moment = require('moment');

var server = net.createServer(function(c) {
    var date = moment().format('YYYY-MM-DD HH:mm');
    c.end(date +'\n');
});

server.listen(process.argv[2]);
