const cirthTrans = function(input) {
    var inputString = input;
    var inputArray = inputString.split("");
    var output = "";
    for (i=0;i<inputArray.length;i++) {
        if (inputArray[i] === "A") {
            output += "¦ᚪ"
        } else if (inputArray[i] === "B") {
            output += "¦ᛒ";
        } else if (inputArray[i] === "C") {
            output += "¦ᚳ";
        } else if (inputArray[i] === "D") {
            output += "¦ᛞ";
        } else if (inputArray[i] === "E") {
            output += "¦ᛖ";
        } else if (inputArray[i] === "F") {
            output += "¦ᚠ";
        } else if (inputArray[i] === "G") {
            output += "¦ᚷ";
        } else if (inputArray[i] === "H") {
            output += "¦ᚻ";
        } else if (inputArray[i] === "I") {
            output += "¦ᛁ";
        } else if (inputArray[i] === "J") {
            output += "¦ᛁ`";
        } else if (inputArray[i] === "K") {
            output += "¦ᚳ`";
        } else if (inputArray[i] === "L") {
            output += "¦ᛚ";
        } else if (inputArray[i] === "M") {
            output += "¦ᛗ";
        } else if (inputArray[i] === "N") {
            output += "¦ᚾ";
        } else if (inputArray[i] === "O") {
            output += "¦ᚩ";
        } else if (inputArray[i] === "P") {
            output += "¦ᛈ";
        } else if (inputArray[i] === "Q") {
            output += "¦ᛈ`";
        } else if (inputArray[i] === "R") {
            output += "¦ᚱ";
        } else if (inputArray[i] === "S") {
            output += "¦ᛋ";
        } else if (inputArray[i] === "T") {
            output += "¦ᛏ";
        } else if (inputArray[i] === "U") {
            output += "¦ᚢ";
        } else if (inputArray[i] === "V") {
            output += "¦ᚢ`";
        } else if (inputArray[i] === "W") {
            output += "¦ᚹ";
        } else if (inputArray[i] === "X") {
            output += "¦ᛉ";
        } else if (inputArray[i] === "Y") {
            output += "¦ᚣ";
        } else if (inputArray[i] === "Z") {
            output += "¦ᛣ";
        } else if (inputArray[i] === "a") {
            output += "ᚪ";
        } else if (inputArray[i] === "b") {
            output += "ᛒ";
        } else if (inputArray[i] === "c") {
            output += "ᚳ";
        } else if (inputArray[i] === "d") {
            output += "ᛞ";
        } else if (inputArray[i] === "e") {
            output += "ᛖ";
        } else if (inputArray[i] === "f") {
            output += "ᚠ";
        } else if (inputArray[i] === "g") {
            output += "ᚷ";
        } else if (inputArray[i] === "h") {
            output += "ᚻ";
        } else if (inputArray[i] === "i") {
            output += "ᛁ";
        } else if (inputArray[i] === "j") {
            output += "ᛁ`";
        } else if (inputArray[i] === "k") {
            output += "ᚳ`";
        } else if (inputArray[i] === "l") {
            output += "ᛚ";
        } else if (inputArray[i] === "m") {
            output += "ᛗ";
        } else if (inputArray[i] === "n") {
            output += "ᚾ";
        } else if (inputArray[i] === "o") {
            output += "ᚩ";
        } else if (inputArray[i] === "p") {
            output += "ᛈ";
        } else if (inputArray[i] === "q") {
            output += "ᛈ`";
        } else if (inputArray[i] === "r") {
            output += "ᚱ";
        } else if (inputArray[i] === "s") {
            output += "ᛋ";
        } else if (inputArray[i] === "t") {
            output += "ᛏ";
        } else if (inputArray[i] === "u") {
            output += "ᚢ";
        } else if (inputArray[i] === "v") {
            output += "ᚢ`";
        } else if (inputArray[i] === "w") {
            output += "ᚹ";
        } else if (inputArray[i] === "x") {
            output += "ᛉ";
        } else if (inputArray[i] === "y") {
            output += "ᚣ";
        } else if (inputArray[i] === "z") {
            output += "ᛣ";
        } else if (inputArray[(i+1)] === "ᚪ" && inputArray[i] === "¦") {
            output += "A";
            i++;
        } else if (inputArray[(i+1)] === "ᛒ" && inputArray[i] === "¦") {
            output += "B";
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] !== "`" && inputArray[i] === "¦") {
            output += "C";
            i++;
        } else if (inputArray[(i+1)] === "ᛞ" && inputArray[i] === "¦") {
            output += "D";
            i++;
        } else if (inputArray[(i+1)] === "ᛖ" && inputArray[i] === "¦") {
            output += "E";
            i++;
        } else if (inputArray[(i+1)] === "ᚠ" && inputArray[i] === "¦") {
            output += "F";
            i++;
        } else if (inputArray[(i+1)] === "ᚷ" && inputArray[i] === "¦") {
            output += "G";
            i++;
        } else if (inputArray[(i+1)] === "ᚻ" && inputArray[i] === "¦") {
            output += "H";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] !== "`" && inputArray[i] === "¦") {
            output += "I";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] === "`" && inputArray[i] === "¦") {
            output += "J";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] === "`" && inputArray[i] === "¦") {
            output += "K";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᛚ" && inputArray[i] === "¦") {
            output += "L";
            i++;
        } else if (inputArray[(i+1)] === "ᛗ" && inputArray[i] === "¦") {
            output += "M";
            i++;
        } else if (inputArray[(i+1)] === "ᚾ" && inputArray[i] === "¦") {
            output += "N";
            i++;
        } else if (inputArray[(i+1)] === "ᚩ" && inputArray[i] === "¦") {
            output += "O";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] !== "`" && inputArray[i] === "¦") {
            output += "P";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] === "`" && inputArray[i] === "¦") {
            output += "Q";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚱ" && inputArray[i] === "¦") {
            output += "R";
            i++;
        } else if (inputArray[(i+1)] === "ᛋ" && inputArray[i] === "¦") {
            output += "S";
            i++;
        } else if (inputArray[(i+1)] === "ᛏ" && inputArray[i] === "¦") {
            output += "T";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] !== "`" && inputArray[i] === "¦") {
            output += "U";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] === "`" && inputArray[i] === "¦") {
            output += "V";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚹ" && inputArray[i] === "¦") {
            output += "W";
            i++;
        } else if (inputArray[(i+1)] === "ᛉ" && inputArray[i] === "¦") {
            output += "X";
            i++;
        } else if (inputArray[(i+1)] === "ᚣ" && inputArray[i] === "¦") {
            output += "Y";
            i++;
        } else if (inputArray[(i+1)] === "ᛣ" && inputArray[i] === "¦") {
            output += "Z";
            i++;
        } else if (inputArray[i] === "ᚪ") {
            output += "a";
        } else if (inputArray[i] === "ᛒ") {
            output += "b";
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] !== "`") {
            output += "c";
        } else if (inputArray[i] === "ᛞ") {
            output += "d";
        } else if (inputArray[i] === "ᛖ") {
            output += "e";
        } else if (inputArray[i] === "ᚠ") {
            output += "f";
        } else if (inputArray[i] === "ᚷ") {
            output += "g";
        } else if (inputArray[i] === "ᚻ") {
            output += "h";
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] !== "`") {
            output += "i";
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] === "`") {
            output += "j";
            i++;
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] === "`") {
            output += "k";
            i++;
        } else if (inputArray[i] === "ᛚ") {
            output += "l";
        } else if (inputArray[i] === "ᛗ") {
            output += "m";
        } else if (inputArray[i] === "ᚾ") {
            output += "n";
        } else if (inputArray[i] === "ᚩ") {
            output += "o";
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] !== "`") {
            output += "p";
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] === "`") {
            output += "q";
            i++;
        } else if (inputArray[i] === "ᚱ") {
            output += "r";
        } else if (inputArray[i] === "ᛋ") {
            output += "s";
        } else if (inputArray[i] === "ᛏ") {
            output += "t";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] !== "`") {
            output += "u";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] === "`") {
            output += "v";
            i++;
        } else if (inputArray[i] === "ᚹ") {
            output += "w";
        } else if (inputArray[i] === "ᛉ") {
            output += "x";
        } else if (inputArray[i] === "ᚣ") {
            output += "y";
        } else if (inputArray[i] === "ᛣ") {
            output += "z";
        } else {
            output += inputArray[i];
        }
    }
    console.log(output)
    return output;
}

var inputField = document.getElementById("textInput")
var outputField = document.getElementById("textOutput")
var outputText;

inputField.onkeyup = function transRefresh() {
    console.log("Detected keyup")
    var input = document.getElementById("textInput").value
    console.log(input)
    outputText = cirthTrans(input);
    console.log(outputText)
    document.getElementById("textOutput").value = outputText
}