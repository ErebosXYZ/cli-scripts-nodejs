// ¡Buena suerte!

const max = Number(process.argv[2]);

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
console.log(getRandomInt(max));