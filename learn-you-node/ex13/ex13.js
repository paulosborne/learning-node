var http    = require('http'),
    url     = require('url'),
    moment  = require('moment'),
    _       = require('underscore');

var server = http.createServer(function(req, resp) {
    var o = url.parse(req.url, true), d;

    if(!_.has(o.query,'iso'))
        resp.end("please provide an url parameter");

    if(!moment(o.query.iso).isValid())
        resp.end("please provide a valid date");

    d = moment(o.query.iso);

    /** set content header */
    resp.writeHead(200, {'Content-Type': 'application/json'});

    switch(o.pathname) {
    case '/api/parsetime':
        resp.write(JSON.stringify({
            "hour": d.hour(),
            "minute": d.minute(),
            "second": d.second()
        }));
        break;
    case '/api/unixtime':
        resp.write(JSON.stringify({
            "unixtime": d.valueOf()
        }));
        break;
    }

    resp.end();

});

server.listen(process.argv[2]);
