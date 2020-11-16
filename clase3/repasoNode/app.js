//Paquete nativo
const fs = require('fs');
const chalk = require('chalk');
const users = require('./users')
//__dirname es la constante que nos dice donde el directorio donde esta el archivo que se esta ejecutando
const message = fs.readFileSync(__dirname +'/message.txt','utf-8');


console.log('estoy en app.js');
console.log('');
console.log('estoy parado en : ', __dirname);
console.log('');
console.log(chalk.green.inverse(message));
console.log('');
console.log(chalk.red(users));