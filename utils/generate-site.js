const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error reject the promise and send the error to promises catch method
            if (err) {
                reject(err);
                //return out of function to make sure promise does not accidentally resolve
                return;
            }
            // if everything went sell resolve and send the successful date to the .then method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };