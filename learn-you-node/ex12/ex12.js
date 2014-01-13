var http    = require('http'),
    map     = require('through2-map');

var server = http.createServer(function(request, response) {
    if(request.method != 'POST')
        return response.end('please send me a post request\n');

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(process.argv[2]);
