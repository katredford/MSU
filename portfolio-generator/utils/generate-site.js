const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an arror, reject the promise and send the error to the promises catch method
            if (err) {
                reject(err);
                //return out of the function here to make sure accidentally execute the resolve() function as well
                return;
            }
            //if everything went well, resolve the promis an send successful data
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject({
                    ok: false,
                    message: 'something went wrong',
                    err
                });
                return;
            }

            resolve({
                ok: true,
                message: "stylesheet created!"
            });
        });
    });
};      

module.exports = { writeFile, copyFile };