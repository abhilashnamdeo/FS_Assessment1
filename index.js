const fs = require('fs');
const argv = require('yargs').argv;

console.log(argv.filename);
const filepath = 'db.json';
//FSWriteOperation();

const test=function(){
    console.log("text");
}
test();
function FSWriteOperation() {


    if (!fs.existsSync(filepath)) {
        var obj = {
            files: []
        };
        var json = JSON.stringify(obj);

        fs.writeFile(filepath, json, err => {
            if (err) {
                console.log("Unable to create array file:-" + err.tostring());
                return;
            }
        }
        );
    }

    fs.readFile(filepath, 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log("Unable to read file array");
        } else {
            obj = JSON.parse(data); //now it an object

            rta = obj.files.filter(i => i.name == 'test.txt');

            if (rta.length <= 0) {
                obj.files.push({ name: argv.filename }); //add some data
                json = JSON.stringify(obj); //convert it back to json

                fs.writeFile(filepath, json, err => {
                    if (err) {
                        console.log("Unable to add filename to array file:-" + err.tostring());
                        return;
                    }
                }
                );

                fs.writeFile(argv.filename, 'You are awesome', err => {
                    if (err) {
                        console.log("Unable to create new file:-" + err.tostring());
                        return;
                    }
                }
                );

            }
            else{
                console.log('File name already exist, please provide new name');
            }

        }
    });



}