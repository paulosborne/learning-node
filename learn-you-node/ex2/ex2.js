
var total = 0;

if(process.argv.length < 3) {
    console.log('Enter some numeric arguments');
}

for(var i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);
