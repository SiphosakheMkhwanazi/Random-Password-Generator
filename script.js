const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charLength = 16;
const output1El = document.getElementById("pass1");
const output2El = document.getElementById("pass2");
const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const copy1El = document.getElementById("copy1");
const copy2El = document.getElementById("copy2");
let clicked = false;

function generatePass(){
    let pass = "";
    for (let i = 0; i<charLength; i++){
        let randIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randIndex];
    }
    copy2El.textContent = "Copy to clipboard";
    copy1El.textContent = "Copy to clipboard";
    clicked = true
    return pass
}
function passToDOM(){
    output1El.textContent = generatePass();
    output2El.textContent = generatePass();
}
btn1El.addEventListener(("click"), () => {
    if (clicked){
        navigator.clipboard.writeText(output1El.textContent);
        copy1El.textContent = "Copied to clipboard";
        copy2El.textContent = "Copy to clipboard";
    }
});
btn2El.addEventListener(("click"), () => {
    if (clicked){
        navigator.clipboard.writeText(output2El.textContent);
        copy2El.textContent = "Copied to clipboard";
        copy1El.textContent = "Copy to clipboard";
    }
});