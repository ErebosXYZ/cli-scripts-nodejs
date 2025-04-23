// Lee el README
const os = require('os');

console.log(`Nombre del equipo: ${os.hostname}`);
console.log(`Edición/Versión del sistema operativo: ${os.type}`);


console.log(`Memoria RAM total: ${(os.totalmem / 1073741824).toFixed(0)} GB`);




