var inputField = document.getElementById("textInput")
var outputField = document.getElementById("textOutput")
var outputText;

inputField.onkeyup = function transRefresh() {
    var input = document.getElementById("textInput").value
    outputText = cirthTrans(input);
    document.getElementById("textOutput").value = outputText
}

const cirthTrans = function(input) {
    var inputString = input;
    var inputArray = inputString.split("");
    var output = "";
    for (i=0;i<inputArray.length;i++) {
        if (inputArray[i] === "A") {
            output += "ᛍᚪ"
        } else if (inputArray[i] === "B") {
            output += "ᛍᛒ";
        } else if (inputArray[i] === "C") {
            output += "ᛍᚳ";
        } else if (inputArray[i] === "D") {
            output += "ᛍᛞ";
        } else if (inputArray[i] === "E") {
            output += "ᛍᛖ";
        } else if (inputArray[i] === "F") {
            output += "ᛍᚠ";
        } else if (inputArray[i] === "G") {
            output += "ᛍᚷ";
        } else if (inputArray[i] === "H") {
            output += "ᛍᚻ";
        } else if (inputArray[i] === "I") {
            output += "ᛍᛁ";
        } else if (inputArray[i] === "J") {
            output += "ᛍᛁᛌ";
        } else if (inputArray[i] === "K") {
            output += "ᛍᚳᛌ";
        } else if (inputArray[i] === "L") {
            output += "ᛍᛚ";
        } else if (inputArray[i] === "M") {
            output += "ᛍᛗ";
        } else if (inputArray[i] === "N") {
            output += "ᛍᚾ";
        } else if (inputArray[i] === "O") {
            output += "ᛍᚩ";
        } else if (inputArray[i] === "P") {
            output += "ᛍᛈ";
        } else if (inputArray[i] === "Q") {
            output += "ᛍᛈᛌ";
        } else if (inputArray[i] === "R") {
            output += "ᛍᚱ";
        } else if (inputArray[i] === "S") {
            output += "ᛍᛋ";
        } else if (inputArray[i] === "T") {
            output += "ᛍᛏ";
        } else if (inputArray[i] === "U") {
            output += "ᛍᚢ";
        } else if (inputArray[i] === "V") {
            output += "ᛍᚢᛌ";
        } else if (inputArray[i] === "W") {
            output += "ᛍᚹ";
        } else if (inputArray[i] === "X") {
            output += "ᛍᛉ";
        } else if (inputArray[i] === "Y") {
            output += "ᛍᚣ";
        } else if (inputArray[i] === "Z") {
            output += "ᛍᛣ";
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
            output += "ᛁᛌ";
        } else if (inputArray[i] === "k") {
            output += "ᚳᛌ";
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
            output += "ᛈᛌ";
        } else if (inputArray[i] === "r") {
            output += "ᚱ";
        } else if (inputArray[i] === "s") {
            output += "ᛋ";
        } else if (inputArray[i] === "t") {
            output += "ᛏ";
        } else if (inputArray[i] === "u") {
            output += "ᚢ";
        } else if (inputArray[i] === "v") {
            output += "ᚢᛌ";
        } else if (inputArray[i] === "w") {
            output += "ᚹ";
        } else if (inputArray[i] === "x") {
            output += "ᛉ";
        } else if (inputArray[i] === "y") {
            output += "ᚣ";
        } else if (inputArray[i] === "z") {
            output += "ᛣ";
        } else if (inputArray[(i+1)] === "ᚪ" && inputArray[i] === "ᛍ") {
            output += "A";
            i++;
        } else if (inputArray[(i+1)] === "ᛒ" && inputArray[i] === "ᛍ") {
            output += "B";
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] !== "ᛌ" && inputArray[i] === "ᛍ") {
            output += "C";
            i++;
        } else if (inputArray[(i+1)] === "ᛞ" && inputArray[i] === "ᛍ") {
            output += "D";
            i++;
        } else if (inputArray[(i+1)] === "ᛖ" && inputArray[i] === "ᛍ") {
            output += "E";
            i++;
        } else if (inputArray[(i+1)] === "ᚠ" && inputArray[i] === "ᛍ") {
            output += "F";
            i++;
        } else if (inputArray[(i+1)] === "ᚷ" && inputArray[i] === "ᛍ") {
            output += "G";
            i++;
        } else if (inputArray[(i+1)] === "ᚻ" && inputArray[i] === "ᛍ") {
            output += "H";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] !== "ᛌ" && inputArray[i] === "ᛍ") {
            output += "I";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] === "ᛌ" && inputArray[i] === "ᛍ") {
            output += "J";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] === "ᛌ" && inputArray[i] === "ᛍ") {
            output += "K";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᛚ" && inputArray[i] === "ᛍ") {
            output += "L";
            i++;
        } else if (inputArray[(i+1)] === "ᛗ" && inputArray[i] === "ᛍ") {
            output += "M";
            i++;
        } else if (inputArray[(i+1)] === "ᚾ" && inputArray[i] === "ᛍ") {
            output += "N";
            i++;
        } else if (inputArray[(i+1)] === "ᚩ" && inputArray[i] === "ᛍ") {
            output += "O";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] !== "ᛌ" && inputArray[i] === "ᛍ") {
            output += "P";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] === "ᛌ" && inputArray[i] === "ᛍ") {
            output += "Q";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚱ" && inputArray[i] === "ᛍ") {
            output += "R";
            i++;
        } else if (inputArray[(i+1)] === "ᛋ" && inputArray[i] === "ᛍ") {
            output += "S";
            i++;
        } else if (inputArray[(i+1)] === "ᛏ" && inputArray[i] === "ᛍ") {
            output += "T";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] !== "ᛌ" && inputArray[i] === "ᛍ") {
            output += "U";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] === "ᛌ" && inputArray[i] === "ᛍ") {
            output += "V";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚹ" && inputArray[i] === "ᛍ") {
            output += "W";
            i++;
        } else if (inputArray[(i+1)] === "ᛉ" && inputArray[i] === "ᛍ") {
            output += "X";
            i++;
        } else if (inputArray[(i+1)] === "ᚣ" && inputArray[i] === "ᛍ") {
            output += "Y";
            i++;
        } else if (inputArray[(i+1)] === "ᛣ" && inputArray[i] === "ᛍ") {
            output += "Z";
            i++;
        } else if (inputArray[i] === "ᚪ") {
            output += "a";
        } else if (inputArray[i] === "ᛒ") {
            output += "b";
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] !== "ᛌ") {
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
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] !== "ᛌ") {
            output += "i";
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] === "ᛌ") {
            output += "j";
            i++;
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] === "ᛌ") {
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
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] !== "ᛌ") {
            output += "p";
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] === "ᛌ") {
            output += "q";
            i++;
        } else if (inputArray[i] === "ᚱ") {
            output += "r";
        } else if (inputArray[i] === "ᛋ") {
            output += "s";
        } else if (inputArray[i] === "ᛏ") {
            output += "t";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] !== "ᛌ") {
            output += "u";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] === "ᛌ") {
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
    return output;
}