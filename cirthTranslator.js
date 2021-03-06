var inputField = document.getElementById("textInput")
var outputField = document.getElementById("textOutput")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var outputText;

// Refresh the output display every time a key is released inside the input area.
inputField.onkeyup = function() {
    transRefresh();
};

let transRefresh = function() {
    var input = document.getElementById("textInput").value
    outputText = cirthTrans(input);
    document.getElementById("textOutput").value = outputText
}

// Allot the user to change the special punctuation marks
var p1 = "ᛍ";
var p2 = "ᛌ";
var pCon1 = "To allow lossless transcription back to latin ᛌ is used as punctuation to show when the preceding letter should be its alternate variant and ᛍ is used as punctuation to show that the following letter should be capitalised."
var pCon2 = "To allow lossless transcription back to latin ` is used as punctuation to show when the preceding letter should be its alternate variant and ¦ is used as punctuation to show that the following letter should be capitalised."
var pCon3 = "To allow lossless transcription back to latin ᛌ is used as punctuation to show when the preceding letter should be its alternate variant and ᛫ is used as punctuation to show that the following letter should be capitalised."
var pCon4 = "To allow lossless transcription back to latin ᛌ is used as punctuation to show when the preceding letter should be its alternate variant and ᛬ is used as punctuation to show that the following letter should be capitalised."
var pCon5 = "This configuration will be unable to correctly transcribe back into latin but will not insert special punctuation."
var pCon6 = "This configuration will be unable to correctly transcribe back into latin but will not insert special punctuation. It will however replace periods with ᛫"
var pCon7 = "This configuration will be unable to correctly transcribe back into latin but will not insert special punctuation. It will however replace periods with ᛭"
btn1.onclick = function() {
    p1 = "ᛍ";
    p2 = "ᛌ";
    pSwitch = false;
    document.getElementById("pClar").innerHTML = pCon1
    transRefresh();
}
btn2.onclick = function() {
    p1 = "¦";
    p2 = "`";
    pSwitch = false;
    document.getElementById("pClar").innerHTML = pCon2
    transRefresh();
}
btn3.onclick = function() {
    p1 = "᛫";
    p2 = "ᛌ";
    pSwitch = false;
    document.getElementById("pClar").innerHTML = pCon3
    transRefresh();
}
btn4.onclick = function() {
    p1 = "᛬";
    p2 = "ᛌ";
    pSwitch = false;
    document.getElementById("pClar").innerHTML = pCon4
    transRefresh();
}
btn5.onclick = function() {
    p1 = "";
    p2 = "";
    pSwitch = false;
    document.getElementById("pClar").innerHTML = pCon5
    transRefresh();
}
btn6.onclick = function() {
    p1 = "";
    p2 = "";
    pSwitch = true;
    p3 = p4;
    document.getElementById("pClar").innerHTML = pCon6
    transRefresh();
}
btn7.onclick = function() {
    p1 = "";
    p2 = "";
    pSwitch = true;
    p3 = p5;
    document.getElementById("pClar").innerHTML = pCon7
    transRefresh();
}

// Handle punctTrans - convert ordinary punctuation to runic punctuation
var pSwitch = false;
var p3 = "᛫"
const p4 = "᛫"
const p5 = "᛭"
const punctTrans = function(input) {
    var inputString = input
    var inputArray = inputString.split("")
    var output = "";
    if (pSwitch === true) {
        for (i=0; i<inputArray.length; i++) {
            if (inputArray[i] === ".") {
                inputArray[i] = " " + p3
            }
            output += inputArray[i]
        }
        return output;
    } else {
        return input;

    }
}

// Handle cirthTrans - convert between letters
const cirthTrans = function(input) {
    var inputString = input;
    var inputArray = inputString.split("");
    var output = "";
    for (i=0;i<inputArray.length;i++) {
        if (inputArray[i] === "A") {
            output += (p1+"ᚪ")
        } else if (inputArray[i] === "B") {
            output += (p1+"ᛒ");
        } else if (inputArray[i] === "C") {
            output += (p1+"ᚳ");
        } else if (inputArray[i] === "D") {
            output += (p1+"ᛞ");
        } else if (inputArray[i] === "E") {
            output += (p1+"ᛖ");
        } else if (inputArray[i] === "F") {
            output += (p1+"ᚠ");
        } else if (inputArray[i] === "G") {
            output += (p1+"ᚷ");
        } else if (inputArray[i] === "H") {
            output += (p1+"ᚻ");
        } else if (inputArray[i] === "I") {
            output += (p1+"ᛁ");
        } else if (inputArray[i] === "J") {
            output += (p1+"ᛁ"+p2);
        } else if (inputArray[i] === "K") {
            output += (p1+"ᚳ"+p2);
        } else if (inputArray[i] === "L") {
            output += (p1+"ᛚ");
        } else if (inputArray[i] === "M") {
            output += (p1+"ᛗ");
        } else if (inputArray[i] === "N") {
            output += (p1+"ᚾ");
        } else if (inputArray[i] === "O") {
            output += (p1+"ᚩ");
        } else if (inputArray[i] === "P") {
            output += (p1+"ᛈ");
        } else if (inputArray[i] === "Q") {
            output += (p1+"ᛈ"+p2);
        } else if (inputArray[i] === "R") {
            output += (p1+"ᚱ");
        } else if (inputArray[i] === "S") {
            output += (p1+"ᛋ");
        } else if (inputArray[i] === "T") {
            output += (p1+"ᛏ");
        } else if (inputArray[i] === "U") {
            output += (p1+"ᚢ");
        } else if (inputArray[i] === "V") {
            output += (p1+"ᚢ"+p2);
        } else if (inputArray[i] === "W") {
            output += (p1+"ᚹ");
        } else if (inputArray[i] === "X") {
            output += (p1+"ᛉ");
        } else if (inputArray[i] === "Y") {
            output += (p1+"ᚣ");
        } else if (inputArray[i] === "Z") {
            output += (p1+"ᛣ");
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
            output += ("ᛁ"+p2);
        } else if (inputArray[i] === "k") {
            output += ("ᚳ"+p2);
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
            output += ("ᛈ"+p2);
        } else if (inputArray[i] === "r") {
            output += "ᚱ";
        } else if (inputArray[i] === "s") {
            output += "ᛋ";
        } else if (inputArray[i] === "t") {
            output += "ᛏ";
        } else if (inputArray[i] === "u") {
            output += "ᚢ";
        } else if (inputArray[i] === "v") {
            output += ("ᚢ"+p2);
        } else if (inputArray[i] === "w") {
            output += "ᚹ";
        } else if (inputArray[i] === "x") {
            output += "ᛉ";
        } else if (inputArray[i] === "y") {
            output += "ᚣ";
        } else if (inputArray[i] === "z") {
            output += "ᛣ";
        } else if (inputArray[(i+1)] === "ᚪ" && inputArray[i] === p1) {
            output += "A";
            i++;
        } else if (inputArray[(i+1)] === "ᛒ" && inputArray[i] === p1) {
            output += "B";
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] !== p2 && inputArray[i] === p1) {
            output += "C";
            i++;
        } else if (inputArray[(i+1)] === "ᛞ" && inputArray[i] === p1) {
            output += "D";
            i++;
        } else if (inputArray[(i+1)] === "ᛖ" && inputArray[i] === p1) {
            output += "E";
            i++;
        } else if (inputArray[(i+1)] === "ᚠ" && inputArray[i] === p1) {
            output += "F";
            i++;
        } else if (inputArray[(i+1)] === "ᚷ" && inputArray[i] === p1) {
            output += "G";
            i++;
        } else if (inputArray[(i+1)] === "ᚻ" && inputArray[i] === p1) {
            output += "H";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] !== p2 && inputArray[i] === p1) {
            output += "I";
            i++;
        } else if (inputArray[(i+1)] === "ᛁ" && inputArray[(i+2)] === p2 && inputArray[i] === p1) {
            output += "J";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚳ" && inputArray[(i+2)] === p2 && inputArray[i] === p1) {
            output += "K";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᛚ" && inputArray[i] === p1) {
            output += "L";
            i++;
        } else if (inputArray[(i+1)] === "ᛗ" && inputArray[i] === p1) {
            output += "M";
            i++;
        } else if (inputArray[(i+1)] === "ᚾ" && inputArray[i] === p1) {
            output += "N";
            i++;
        } else if (inputArray[(i+1)] === "ᚩ" && inputArray[i] === p1) {
            output += "O";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] !== p2 && inputArray[i] === p1) {
            output += "P";
            i++;
        } else if (inputArray[(i+1)] === "ᛈ" && inputArray[(i+2)] === p2 && inputArray[i] === p1) {
            output += "Q";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚱ" && inputArray[i] === p1) {
            output += "R";
            i++;
        } else if (inputArray[(i+1)] === "ᛋ" && inputArray[i] === p1) {
            output += "S";
            i++;
        } else if (inputArray[(i+1)] === "ᛏ" && inputArray[i] === p1) {
            output += "T";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] !== p2 && inputArray[i] === p1) {
            output += "U";
            i++;
        } else if (inputArray[(i+1)] === "ᚢ" && inputArray[(i+2)] === p2 && inputArray[i] === p1) {
            output += "V";
            i++;
            i++;
        } else if (inputArray[(i+1)] === "ᚹ" && inputArray[i] === p1) {
            output += "W";
            i++;
        } else if (inputArray[(i+1)] === "ᛉ" && inputArray[i] === p1) {
            output += "X";
            i++;
        } else if (inputArray[(i+1)] === "ᚣ" && inputArray[i] === p1) {
            output += "Y";
            i++;
        } else if (inputArray[(i+1)] === "ᛣ" && inputArray[i] === p1) {
            output += "Z";
            i++;
        } else if (inputArray[i] === "ᚪ") {
            output += "a";
        } else if (inputArray[i] === "ᛒ") {
            output += "b";
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] !== p2) {
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
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] !== p2) {
            output += "i";
        } else if (inputArray[i] === "ᛁ" && inputArray[(i+1)] === p2) {
            output += "j";
            i++;
        } else if (inputArray[i] === "ᚳ" && inputArray[(i+1)] === p2) {
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
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] !== p2) {
            output += "p";
        } else if (inputArray[i] === "ᛈ" && inputArray[(i+1)] === p2) {
            output += "q";
            i++;
        } else if (inputArray[i] === "ᚱ") {
            output += "r";
        } else if (inputArray[i] === "ᛋ") {
            output += "s";
        } else if (inputArray[i] === "ᛏ") {
            output += "t";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] !== p2) {
            output += "u";
        } else if (inputArray[i] === "ᚢ" && inputArray[(i+1)] === p2) {
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
    return punctTrans(output);
}