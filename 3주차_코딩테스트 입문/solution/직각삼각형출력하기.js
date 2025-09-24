const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let cnt = '*';
let result = '';

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i= 0; i< Number(input[0]); i++){
        result = result + cnt + '\n'
        cnt = cnt + '*';
    }
    console.log(result);
});