const fs = require("fs"); // file sync

function Export(data, file="data.json"){
    try {
        fs.writeFileSync(file, JSON.stringify(data));
    } catch (error){
        console.log(error);
    }
}

module.exports = (Export);