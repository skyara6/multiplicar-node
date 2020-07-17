//requiereds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('========='.green);
    console.log(`Tabla ${base}`.green);
    console.log('========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base* i}\n`);

    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de base=> ${base} no es un numero`);
        }
        if (!Number(limite)) {
            reject(`El valor de limite=> ${limite} no es un numero`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base* i}\n`;

        }
        fs.writeFile(`tablas/tabla${base}-ltm${limite} .txt`, data, (err) => {
            if (err) {
                reject(err);
                return;
            } else
                resolve(`El archivo tabla-${base}-ltm${limite}.txt`);


        });


    });

}

module.exports = {
    crearArchivo,
    listarTabla
}