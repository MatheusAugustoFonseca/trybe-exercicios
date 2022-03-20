let sparkles = "*";
let n = 5;
let line ="";
let space = n;

for (let i = 0; i <= n; i += 1){
    for (let spaceindex = 0; spaceindex <= n; spaceindex += 1){
        if (spaceindex < n) {
            line += " ";
        } else {
            line += sparkles;
        }
    }
    console.log(line);
    line = "";
    space -= 1;
}


