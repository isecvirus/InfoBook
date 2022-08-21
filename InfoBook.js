const readline = require("readline");
const fs = require("fs"); // file sync
const Fg = require("./Colors").fg; // Foreground colors, Ex: Fg("green");
const Bg = require("./Colors").bg; // Background colors, Ex: Bg("green");
const Gr = require("./Colors").gr; // Graphic rendition, Ex: Gr("bold");
const Help = require("./help");
const MoreHelp = require("./help-more");
// const Logo = require("./logo.js");
const Table = require("./tabler");
const Sort = require("./sort");
const SortBy = require("./sort-by");
const Import = require("./import");
const Export = require("./export");
// const Tiper = require("./tips");


function getVal(inp, par1,par2, _=0){
    if (inp.includes(par1) || inp.includes(par2)){
        if (inp.includes(par1)){var index = inp.indexOf(par1) + 1 + _;}
        else if (inp.includes(par2)){var index = inp.indexOf(par2) + 1 + _;};

        if (index >= 1 && inp.length >= 1){
            value = inp[index];
            return value;
        } else {return null};
    }
}

function Capitalize(s){ // Capitalize
    /*
    Example:
        s = string
        test > Test
    */
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

function Enc$base64(string){
    return String(btoa(string)); /* Binary to ascii */
}
function Dec$base64(string){
    return String(atob(string)); /* Ascii to binary */
}

function Confirmation(message, yes="y", no="n"){
    let conf = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    conf.question(message, function(ans){
        if (ans === yes){
            conf.close();return {"answer": true, "listener": conf};
        } else if (ans === no){
            conf.close();return {"answer": false, "listener": conf};
        }
    });
}

function Tiper(){
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
    Tiper();
};

function InfoBook(){
    Logo();
    const rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    let verbose = false;
    let debug = false;
    let prompt = "→";
    let prompt_color = "yellow";

    let data = {};
    if (fs.existsSync("data.json")){
        Import(data, "data.json");
    }
    /* 
    \033[0K        G
    ^ (clear line)
    */

    function reinput(){
        try {
            rl.question(`${Bg("cyan")} IB ${Bg(prompt_color)} ${prompt} ${Fg("red")}` + Gr("reset"), function(inp){
                reg = new RegExp("[A-z0-9\=\!\@\#\$\~\%\&\*\(\)\+\-\}\{\"\'\:\;\?/\>\.\,\<]+", "g");
                var inp = inp.match(reg);
                // console.log(inp);
                if (debug === true){
                    try {
                        // set -d true

                        /* Input */
                        if (!(inp) === null){
                            console.log(inp);
                        } else {console.log("* No input provided!");}
                        /* Comment */
                        console.log("Valid comment?:", inp[0].startsWith("//"));
                    } catch {}
                };

                if (!(inp === null)){
                    // if (inp.length >= 1){
                        if (inp[0] === "set"){
                            var isVerbose = getVal(inp, "-v", "--verbose");
                            var isDebug = getVal(inp, "-d", "--debug");
                            var isPrompt = getVal(inp, "-p", "--prompt");
                            var isPrompt_color = getVal(inp, "-c", "--color");
                            if (!(isVerbose === undefined)){
                                if (!(isVerbose === null)){
                                    if (isVerbose === "true"){
                                        verbose = true;
                                        console.log(`${Bg("cyan")} verbose ${Bg("gray")} > ${Bg("green")} true ${Gr("reset")}`)
                                    } else if (isVerbose === "false"){
                                        verbose = false;
                                        console.log(`${Bg("cyan")} verbose ${Bg("gray")} > ${Bg("red")} false ${Gr("reset")}`)
                                    }
                                    else (console.log(`${Bg("red")} ${isVerbose} ${Bg("gray")} is not allowed only (true,false).${Gr("reset")}`))
                                } else {console.log(`Try "help set".`)}
                            } else if (!(isDebug === undefined)){
                                if (!(isDebug === null)){
                                    if (isDebug === "true"){
                                        debug = true;
                                        console.log(`${Bg("cyan")} debug ${Bg("gray")} > ${Bg("green")} true ${Gr("reset")}`)
                                    } else if (isDebug === "false"){
                                        debug = false;
                                        console.log(`${Bg("cyan")} debug ${Bg("gray")} > ${Bg("red")} false ${Gr("reset")}`)
                                    }
                                    else (console.log(`${Bg("red")} ${isDebug} ${Bg("gray")} is not allowed only (true,false).${Gr("reset")}`))
                                } else {console.log(`Try "help set".`)}
                            } else if (!(isPrompt === undefined)){
                                if (!(isPrompt === null)){
                                    prompt = isPrompt;
                                } else {prompt = "→";}
                            } else if (!(isPrompt_color === undefined)){
                                if (!(isPrompt_color === null)){
                                    prompt_color = isPrompt_color;
                                } else {prompt_color = "yellow";}
                            } else {console.log("set??.. what?!")}
                        } else if (inp[0] === "new"){
                            var target = getVal(inp, "-t", "--target");
                            if (!(target === undefined )){
                                if (!(target === null)){
                                    if (!(target in data)){
                                        data[target] = {
                                            // "#": Object.keys(data).length + 1,
                                            "name": target,
                                            "father": "",
                                            "last-name": "",
                                            "nickname": "",
                                            "age": "",
                                            "country": "",
                                            "city": "",
                                            "address": "",
                                            "state": "",
                                            "telephone": "",
                                            "email": "",
                                            "national-id": "",
                                            "dob": "",
                                            "gender": "",
                                        };
                                        // console.log(target, data);
                                        console.log(`${target} added successfully.`);
                                    } else {console.log(`${target} already exist.`);}
                                } else {console.log("No target provided!")}
                            } else {console.log("new??.. what?!")};
                        } else if (inp[0] === "add") {
                            var target = getVal(inp, "-t", "--target");
                            var query = getVal(inp, "-q", "--query");
                            var Qvalue = getVal(inp, "-q", "--query", 1); // 1 is the index++
                            if (!(target === undefined)){ // check if -t or --target is specified
                                if (!(target === null)){ // check if there is a value passed to -t or --target
                                    if (target in data){ // check if target is exsits
                                        if (!(query === undefined)){ // check if -q or --query is specified
                                            if (!(query === null)){ // check if there is a value passed to -q or --query
                                                if (!(query in data[target])){ // check for the passed query if it not added to the -t or --target.
                                                    // if (!(Qvalue === null || Qvalue === undefined)){ // check if there is value passed to the -q or --query
                                                    data[target][query] = Qvalue;
                                                    // } else {console.log("No value was provided");}
                                                } else {console.log("Query already added!");}
                                            } else {console.log("Query might be misspelled!");}
                                        } else {console.log("Run \"help add\" (;");}
                                    } else {console.log("Target not found!");}
                                } else {console.log("Set target (:");}
                            } else {console.log("Run \"help add\" (;");}
                        } else if (inp[0] === "edit"){
                            var target = getVal(inp, "-t", "--target");
                            var query = getVal(inp, "-q", "--query");
                            var Qvalue = getVal(inp, "-q", "--query", 1); // 1 is the index++
                            if (!(target === undefined)){ // check if -t or --target is specified
                                if (!(target === null)){ // check if there is a value passed to -t or --target
                                    if (target in data){ // check if target is exsits
                                        if (!(query === undefined)){ // check if -q or --query is specified
                                            if (!(query === null)){ // check if there is a value passed to -q or --query
                                                if (query in data[target]){ // check for the passed query if it added to the -t or --target.
                                                    if (!(Qvalue === null || Qvalue === undefined)){ // check if there is value passed to the -q or --query
                                                        data[target][query] = Qvalue;
                                                    } else {console.log("No new value was provided");}
                                                } else {console.log("Query not found!");}
                                            } else {console.log("Query might be misspelled!");}
                                        } else {console.log("Run \"help edit\" (;");}
                                    } else {console.log("Target not found!");}
                                } else {console.log("Set target (:");}
                            } else {console.log("Run \"help edit\" (;");}
                            // console.log(query);
                            // console.log(Qvalue);
                        } else if (inp[0] === "delete"){
                            var target = getVal(inp, "-t", "--target");
                            var query = getVal(inp, "-q", "--query");
                            if (!(target === undefined)){ // check if -t or --target is specified
                                if (!(target === null)){ // check if there is a value passed to -t or --target
                                    if (target in data){ // check if target is exsits
                                        if (!(query === undefined)){ // check if -q or --query is specified
                                            if (!(query === null)){ // check if there is a value passed to -q or --query
                                                if (query in data[target]){ // check for the passed query if it not added to the -t or --target.
                                                    if (data[target].hasOwnProperty(query)){ // check if query is exists
                                                        if (query in ["#"]){console.log("Can't delete index");}
                                                        else {delete data[target][query];} // delete it (;}
                                                        console.log(`Query "${query}" deleted successfully (;`)
                                                    } else {console.log(`Can't find "${query}"!`)}
                                                } else {console.log("Query is not exists!");}
                                            } else {console.log("Query might be misspelled!");}
                                        } else {
                                            if (target in data){
                                                delete data[target];
                                                console.log(`Target "${target}" deleted successfully (;`)
                                            } else {console.log("Target not found!")}
                                        }
                                    } else {console.log("Target not found!");}
                                } else {console.log("Set target (:");}
                            } else {console.log("Run \"help delete\" (;");}

                        } else if (inp[0] === "show"){
                            var all = getVal(inp, "-a", "--all", -1);
                            var target = getVal(inp, "-t", "--target");
                            var options = getVal(inp, "-o", "--options", -1);

                            if (Object.keys(data).length > 0 || options){
                                if (!(all === null || all === undefined)){
                                    console.log(Table(data));
                                    console.log(`Total targets: ${Object.keys(data).length}`);
                                } else if (!(target === null || target === undefined)){
                                    if (target in data){
                                        console.log(Table({target: data[target]}));
                                        console.log(`Total queries for (${target}): ${Object.keys(data[target]).length}`);
                                    } else {console.log(`${target} couldn't be found!`)}
                                } else if (options) {
                                    console.log(`Debug   : ${debug}\nPrompt  : ${prompt}\nColor   : ${prompt_color}`)
                                } else {console.log("Run \"help show\"");};
                            } else {console.log("No data to SHOW!")}
                        } else if (inp[0] === "fetch") {
                            var target = getVal(inp, "-t", "--target");
                            var query = getVal(inp, "-q", "--query");

                            if (Object.keys(data).length > 0){
                                if (target in data){
                                    if (query in data[target]){
                                        console.log(data[target][query])
                                    } else {console.log(`${query?`"${query}"`:"Query"} not in ${target?`${target}`:"target"}'s data!`)}
                                } else {console.log(`${target?`"${target}"`:"Target"} not found!`)}
                            } else {console.log("No data to SHOW!")}
                        } else if (inp[0] === "sort"){
                            var term = getVal(inp, "-t", "--term");
                            var forward = getVal(inp, "-f", "--forward", -1);
                            var backward = getVal(inp, "-b", "--backward", -1);
                            if (Object.keys(data).length > 0){
                                if (term){
                                    console.log("forward:", forward, "backward:", backward)
                                    if (forward){
                                        SortBy(data, term, "forward");
                                    } else if (backward){
                                        SortBy(data, term, "backward");
                                    } else {SortBy(data, term);}
                                } else {
                                    if (forward){
                                        Sort(data, "forward");
                                    } else if (backward){
                                        Sort(data, "backward");
                                    } else {Sort(data);}
                                }
                            } else {console.log("There is no data to sort (:");}
                        } else if (inp[0] === "save") {
                            var file = getVal(inp, "-f", "--file");
                            var overwrite = getVal(inp, "-o", "--overwrite", -1);
                            if (file){
                                if (!(fs.existsSync(file)) || overwrite){
                                    Export(data, file);
                                } else {console.log(`"${file}" is exists (to overwrite use -o/--overwrite)`);}
                            } else {
                                Export(data);
                            }
                        } else if (inp[0] === "import"){
                            var file = getVal(inp, "-f", "--file");

                            if (fs.existsSync(file)){
                                $len = Object.keys(data).length; // before importing
                                Import(data, file);
                                len$ = Object.keys(data).length; // after importing
                                console.log(`${len$ - $len} Imported successfully.`);
                            } else {
                                if (file === undefined){console.log(`Use -f to specify a file.`);}
                                else {console.log(`${file} not exists (:`);}
                            }

                        }  else if (inp[0].startsWith("//")){
                            inp[0] = inp[0].slice(2);
                            console.log(...inp);
                        } else if (inp[0] === "clear"){
                            console.clear();
                        } else if (inp[0] === "help"){
                            if (inp.length === 2){
                                MoreHelp(inp[1]);
                            }
                            else if (inp.length === 1){
                                Help();
                            };
                        } else if (inp[0] === "logo"){
                            Logo();
                        } else if (inp[0] === "tip") {
                            Tiper();
                        } else if (inp[0] === "exit"){
                            rl.close();
                        }
    
    
                        else {
                            console.log(`${(Fg("red") + inp + Gr("reset"))} is not a valid command${inp.length>1?"s":""}.`);
                            console.log(`Run ${Fg("red")}help${Gr("reset")} to show usage menu.`);
                        }
                    // }
                };reinput();
            });
        } catch (error){
            console.debug("Leaving!");
        }
    };
    reinput();

}
InfoBook();