var fs = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
        if(err) return callback(err);

        callback(null, data.filter(function (file) {
            return path.extname(file) === '.' + ext
        }));
    });
}
