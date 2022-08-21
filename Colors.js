function gr(r){
    r = String(r).toLowerCase();
    renditions = {
        "reset": "0",
        "bold": "1",
        "dim": "2",
        "italic": "3",
        "underline": "4",
        "slow-blink": "5",
        "rapid-blink": "6",
        "reverse": "7",
        "hide": "8",
        "middleline": "9",
        "primary-font": "10", // primary(default)-font
        "alt-font1": "11", // alternative-font
        "alt-font2": "12",
        "alt-font3": "13",
        "alt-font4": "14",
        "alt-font5": "15",
        "alt-font6": "16",
        "alt-font7": "17",
        "alt-font8": "18",
        "alt-font9": "19",
        "fraktur-font": "20",
        "double-underline": "21",
        "intensity": "22",
        "no-font": "23",
        "no-underline": "24",
        "prop-spacing": "26", // proportional spacing
        "no-reverse": "27",
        "no-hide": "28",
        "no-middleline": "29",
        "no-prop-spacing":"50",
        "framed":"51",
        "encircled":"52",
        "overline":"53",
        "no-framed": "54",
        "no-overline":"55",
        "underline-color": "58",
        "rightline": "32"
    }
    if (r in renditions){
        return "\033[" + String(renditions[r]) + "m";
    } else {return ""}
}
function fg(f){
    f = String(f).toLowerCase();
    forgrounds = {
        "black": "30",
        "red": "31",
        "green": "32",
        "yellow": "33",
        "blue": "34",
        "magenta": "35",
        "cyan": "36",
        "white": "37",
        "gray": "90",
        "red-bright": "91",
        "green-bright": "92",
        "yellow-bright": "93",
        "blue-bright": "94",
        "magenta-bright": "95",
        "cyan-bright": "96",
        "white-bright": "97",
    };
    if (f in forgrounds){
        return "\033[" + String(forgrounds[f]) + "m";
    } else {return ""}
}
function bg(b){
    b = String(b).toLowerCase();
    backgrounds = {
        "black": "40",
        "red": "41",
        "green": "42",
        "yellow": "43",
        "blue": "44",
        "magenta": "45",
        "cyan": "46",
        "white": "47",
        "gray": "100",
        "red-bright": "101",
        "green-bright": "102",
        "yellow-bright": "103",
        "blue-bright": "104",
        "magenta-bright": "105",
        "cyan-bright": "106",
        "white-bright": "107",
    }
    if (b in backgrounds){
        return "\033[" + String(backgrounds[b]) + "m";
    } else {return ""}
}

module.exports = {gr, fg, bg};