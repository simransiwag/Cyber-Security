function encrypt() {
    let text = document.getElementById("text").value;
    let shift = Number(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= "A" && char <= "Z") {
            let code = char.charCodeAt(0);
            result += String.fromCharCode((code - 65 + shift) % 26 + 65);
        }
        else if (char >= "a" && char <= "z") {
            let code = char.charCodeAt(0);
            result += String.fromCharCode((code - 97 + shift) % 26 + 97);
        }
        else {
            result += char;
        }
    }

    document.getElementById("result").value = result;
}

function decrypt() {
    let text = document.getElementById("text").value;
    let shift = Number(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= "A" && char <= "Z") {
            let code = char.charCodeAt(0);
            result += String.fromCharCode((code - 65 - shift + 26) % 26 + 65);
        }
        else if (char >= "a" && char <= "z") {
            let code = char.charCodeAt(0);
            result += String.fromCharCode((code - 97 - shift + 26) % 26 + 97);
        }
        else {
            result += char;
        }
    }

    document.getElementById("result").value = result;
}

function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("shift").value = "";
    document.getElementById("result").value = "";
}