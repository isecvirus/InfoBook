const Fg = require("./Colors").fg; // Foreground colors, Ex: Fg("green");
const Bg = require("./Colors").bg; // Background colors, Ex: Bg("green");
const Gr = require("./Colors").gr; // Graphic rendition, Ex: Gr("bold");
const Tiper = require("./tips").random_tip();


function Logo(){
    var logo = "";
    logo += `${Fg("cyan")} _____        ___${Fg("yellow")}      ______              _${Gr("reset")}\n`;
    logo += `${Fg("cyan")}(_____)      / __)${Fg("yellow")}    (____  \\            | |${Gr("reset")}\n`;
    logo += `${Fg("cyan")}   _   ____ | |__ ___${Fg("yellow")}  ____)  ) ___   ___ | |  _${Gr("reset")}\n`;
    logo += `${Fg("cyan")}  | | |  _ \\|  __) _ \\${Fg("yellow")}|  __  ( / _ \\ / _ \\| | / )${Gr("reset")}\n`;
    logo += `${Fg("cyan")} _| |_| | | | | | |_| ${Fg("yellow")}| |__)  ) |_| | |_| | |< (${Gr("reset")}\n`;
    logo += `${Fg("cyan")}(_____)_| |_|_|  \\___/${Fg("yellow")}|______/ \\___/ \\___/|_| \\_)${Gr("reset")}\n`;
    logo += " V1.0.0                              OSINT tool";
    console.log(logo);
    Tiper;
};

module.exports = (Logo);