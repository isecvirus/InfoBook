const fs = require("fs"); // file sync
const { parse } = require("path");

function Import(dict, file="data.json"){
    try {
        var dict;
        const fdata = fs.readFileSync(file, 'utf-8'); // fdata = file data
        const keys = Object.keys(JSON.parse(fdata));
        // console.log(dict);
        // console.log(JSON.parse(fdata));
        // var dict = {...JSON.parse(fdata), ...dict};
        for (k=0;k<keys.length;k++){
            var value = JSON.parse(fdata)[keys[k]];
            if (!(value === undefined || value === null)){
                dict[keys[k]] = JSON.parse(fdata)[keys[k]];
            }
        }
    } catch (e){console.error(e);}
}

module.exports = (Import);