var http    = require('http'),
    async   = require('async');

process.argv.forEach(function(url) {
    http.get(url, function () {
        console.log(url);
    });
});
