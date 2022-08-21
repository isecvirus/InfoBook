const Fg = require("./Colors").fg; // Foreground colors, Ex: Fg("green");
const Gr = require("./Colors").gr; // Graphic rendition, Ex: Gr("bold");


function random_tip(){
    let tips = {
        "set": "IB session settings.",
        "new": "Add new target.",
        "add": "Add new query to target.",
        "edit": "Edit exist target query.",
        "delete": "Delete exist target.",
        "show": "Show targets.",
        "fetch": "Fetch targets data.",
        "sort": "Sort victims infomations By <term> and direction",
        "save": "Save changes.",
        "import": "Import victims info from file.<json>",
        "clear": "Clear the console.",
        "help": "Show this help message and continue.",
        "logo": "Show the magnificent logo.",
        "exit": "Exit the program (no confirmation).",
        "-c/--color": "Prompt character background color.",
        "-d/--debug": "Debug commands and process of IB.",
        "-p/--prompt": "Prompt character.",
        "-v/--verbose": "Verbose messages and logs.",
        "-t/--target": "Parse target name.",
        "-q/--query": "Parse target query (info) value.",
        "-a/--all": "Show all targets.",
        "-o/--option": "Show IB session settings.",
        "-b/--backward": "Sort data backward (reverse it).",
        "-f/--forward": "Sort data forward (normal).",
        "-t/--term": "Sort data according to <Query>",
        "-f/--file": "Parse <file.json> to save data to.",
        "-o/--overwrite": "Confirm overwrite data.",
    };
    var random_int = Math.floor(Math.random() * Object.keys(tips).length);
    var random_key = Object.keys(tips)[random_int];
    var random = tips[random_key];
    console.log(`${Fg("green-bright") + random_key + Gr("reset")}: ${Fg("gray") + random + Gr("reset")}`);
}

module.export = (random_tip)