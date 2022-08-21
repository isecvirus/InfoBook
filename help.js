const Fg = require("./Colors").fg; // Foreground colors, Ex: Fg("green");
const Bg = require("./Colors").bg; // Background colors, Ex: Bg("green");
const Gr = require("./Colors").gr; // Graphic rendition, Ex: Gr("bold");
const Table = require("./tabler");

function Help(){
    /*
    NEW:
        Description:
            Add new target.
        Parameters (1):
            -t/--target=<target name>
                Ex: -t John/--target سلطان
    EDIT:
        Description:
            Edit exist target info.
        Parameters (1):
            -t/--target=<target name>
                Ex: -t John/--target سلطان
    SHOW:
        Description:
            Show exist target info.
        Parameters (2):
            -a/--all
            or -t/--target=<target name>
                Ex: -t John/--target سلطان
            -q/--query=<data query>
                Ex: -q name/--query age
            
            *** (if -q is set and -t not set then all data will be fetched using the value of -q EX: age) ***
    EXPORT:
        Description:
            Export all or certain data to file file.<txt>, file.<html>.
        Parameters (5):
            -a/--all
            or -t/--target=<target name>
                Ex:
            -f/--from=<num>
                Ex:
            -t/--to=<num>
                Ex:
            -e/--extension=<file extension>
                Ex:
            -d/--destination
                Ex:
    */
    var help = [
        {"#": 1, Command: "set", Description: "IB session settings.", Parameters: 4},
        {"#": 2, Command: "new", Description: "Add new target.", Parameters: 1},
        {"#": 3, Command: "add", Description: "Add new query to target.", Parameters: 2},
        {"#": 4, Command: "edit", Description: "Edit exist target query.", Parameters: 2},
        {"#": 5, Command: "delete", Description: "Delete exist target.", Parameters: 2},
        {"#": 6, Command: "show", Description: "Show targets.", Parameters: 3},
        {"#": 7, Command: "fetch", Description: "Fetch targets data.", Parameters: 2}, // -t/--target, -q/--query
        {"#": 8, Command: "sort", Description: "Sort victims infomations By <term> and direction.", Parameters: 3},// -t/--term, -f/--forward, -b/--backward
        {"#": 9, Command: "save", Description: "Save changes.", Parameters: 2},
        {"#": 10, Command: "import", Description: "Import victims info from file.<json>", Parameters: 1},
        // {"#": 10, Command: "export", Description: "Export all or certain data to file file.<txt>, file.<html>", Parameters: 6},
        // {"#": 11, Command: "server", Description: "Control the IB server for hosting data.", Parameters: 7}, // -r/--run, -s/--stop, -t/--target, -q/--query, -i/--ip, -p/--port, -b,--base64
        {"#": 11, Command: "clear", Description: "Clear the console.", Parameters: 0},
        {"#": 12, Command: "help", Description: "Show this help message and continue.", Parameters: 1},
        {"#": 13, Command: "logo", Description: "Show the magnificent logo.", Parameters: 0},
        {"#": 14, Command: "tip", Description: "Get random tip (;", Parameters: 0},
        {"#": 15, Command: "exit", Description: "Exit the program (no confirmation).", Parameters: 0},
    ];
    console.log(Table(help));
    console.log("help <command> to show more help for the specified <command>");
};

module.exports = (Help);