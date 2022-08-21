function Sort(dict, direction="forward"){
    var keys = Object.keys(dict); // get dictionary keys as list (not sorted yet) ["a", "b", "c"]
    $new_dict = {}; // new dictionary

    $sorted = keys.sort(($1, $2) => { // start sorting ($1, $2) is comparing two values.
      if ($1 < $2){ // check if $1 is before $2 (Ex):
        /*
        $1=abc
        $2=bcd
        $1 is before $2 in character sorting system.
        */
        return -1;
      }
      if ($1 > $2){ // check if $1 is after $2 (Ex):
        /*
        $1=bcd
        $2=abc
        $2 is after $1 in character sorting system.
        */
        return 1;
      }
      return 0;
    });

    if (direction === "backward"){$sorted=$sorted.reverse()} // reverse values if requested.

    for (i=0;i<$sorted.length;i++){ // start itterating through sorted values.
      value = dict[$sorted[i]]; // get value of dict[$sorted[i]] (Ex): {"abc": {name:"abc", age:"10"}} ({name:"abc", age:"10"} is the value)
        delete dict[$sorted[i]]; // delete target from dict after getting it's value
        dict[$sorted[i]] = value; // add it to $new_dict (Ex):
      /*
      $new_dict[$sorted[i]] = dict[$sorted[i]];
      {
        "abc": <- is $sorted[i]
        {name:"abc", age:"10"} <- get $sorted[i] data from dict (this is dict[$sorted[i]])
      }
      */
    }
  };
  
module.exports = (Sort);