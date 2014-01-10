var my_module = require('./mymodule');

if(process.argv.length < 3) {
    console.log('Please enter some arguments.');
    return 1;
}

my_module(process.argv[2], process.argv[3], function(err, data) {
    data.forEach(function (file) {
        console.log(file);
    });
});
