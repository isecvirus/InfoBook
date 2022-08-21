const Fg = new require("./Colors").fg; // Foreground colors, Ex: Fg("green");
const Bg = new require("./Colors").bg; // Background colors, Ex: Bg("green");
const Gr = new require("./Colors").gr; // Graphic rendition, Ex: Gr("bold");
const Table = new require("./tabler");

$set = [
    {"#": "1", Parameter: "-c/--color <Color>", Value: "<Color>", default: "yellow", Description: "Prompt character background color.", Priority: "important"},
    {"#": "2", Parameter: "-d/--debug <Value>", Value: "true/false", default: false, Description: "Debug commands and process of IB.", Priority: "important"},
    {"#": "3", Parameter: "-p/--prompt <Char>", Value: "<Any>", default: "→", Description: "Prompt character.", Priority: "important"},
    {"#": "4", Parameter: "-v/--verbose <Value>", Value: "true/false", default: false, Description: "Verbose messages and logs.", Priority: "important"},
]
$new = [
    {"#": "1", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$add = [
    {"#": "1", Parameter: "-q/--query <Query value>", Value: "<Query>", default: "", Description: "Parse target query (info) value.", Priority: "important"},
    {"#": "2", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$edit = [
    {"#": "1", Parameter: "-q/--query <Query value>", Value: "<Query>", default: "", Description: "Parse target query (info) value.", Priority: "important"},
    {"#": "2", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$delete = [
    {"#": "1", Parameter: "-q/--query <Query value>", Value: "<Query>", default: "", Description: "Parse target query (info) value.", Priority: "additional"},
    {"#": "2", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$show = [
    {"#": "1", Parameter: "-a/--all", Value: "", default: "", Description: "Show all targets.", Priority: "important"},
    {"#": "2", Parameter: "-o/--option", Value: "", default: "", Description: "Show IB session settings.", Priority: "important"},
    {"#": "3", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$fetch = [
    {"#": "1", Parameter: "-q/--query <Query value>", Value: "<Query>", default: "", Description: "Parse query (info) value.", Priority: "important"},
    {"#": "2", Parameter: "-t/--target <Target name>", Value: "<Name>", default: "", Description: "Parse target name.", Priority: "important"},
]
$sort = [
    {"#": "1", Parameter: "-b/--backward", Value: "", default: false, Description: "Sort data backward (reverse it).", Priority: "additional"},
    {"#": "2", Parameter: "-f/--forward", Value: "", default: true, Description: "Sort data forward (normal).", Priority: "additional"},
    {"#": "3", Parameter: "-t/--term <Query value>", Value: "<Query>", default: "", Description: "Sort data according to <Query>", Priority: "important"},
]
$save = [
    {"#": "1", Parameter: "-f/--file", Value: "<File.json>", default: "data.json", Description: "Parse <file.json> to save data to.", Priority: "important"},
    {"#": "2", Parameter: "-o/--overwrite", Value: "", default: "", Description: "Confirm overwrite data.", Priority: "additional"},
]
$import = [
    {"#": "1", Parameter: "-f/--file", Value: "<File.json>", default: "", Description: "Parse <file.json> to save data to.", Priority: "important"},
]

// $clear = [{"#": "1", Parameter: "", Value: "", Description: ""}]

$help = [
    {"#": "1", Parameter: "", Value: "<Command>", default: "", Description: "Show more help for <Command>.", Priority: "additional"},
]

// $logo = [{"#": "1", Parameter: "", Value: "", Description: ""}]
// $exit = [{"#": "1", Parameter: "", Value: "", Description: ""}]

function MoreHelp(command){
    commands = {
        "set": $set,
        "new": $new,
        "add": $add,
        "edit": $edit,
        "delete": $delete,
        "show": $show,
        "fetch": $fetch,
        "sort": $sort,
        "save": $save,
        "import": $import,
        // "clear": $clear,
        "help": $help,
        // "logo": $logo,
        // "exit": $exit,
    }
    if (command in commands){
        console.log(Table(commands[command]));
    } else {
        console.log(`${Bg("red")} ${command} ${Bg("gray")} Doesn't have a man help.${Gr("reset")}`)
    }
}
module.exports = (MoreHelp);