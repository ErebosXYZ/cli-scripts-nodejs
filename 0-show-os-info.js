// Lee el README
const os = require('os');

console.log(`Nombre del equipo: ${os.hostname()}`);
console.log(`Edición/Versión del sistema operativo: ${os.version()}`);


console.log(`Memoria RAM total: ${(os.totalmem() / (1073741824)).toFixed(0)} GB`); 
/** Convertim bytes, que es el valor que retorna totalmem a Gigabytes. 1024 elevat a 3 = 1073741824, podríem escriure (1024 ** 3)*/




