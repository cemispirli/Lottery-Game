let numberimput = document.getElementById("number");
let button = document.getElementById("button");
let text = document.getElementById("text");

numberimput.addEventListener("click", () => {
    numberimput.value = "";
    
});


function randomNumbers() {
    let x = [];
    while (x.length < 6) {
        let randomNumber = ((Math.floor(Math.random() * 90)+1)+"").padStart(2, "0");
        if (!x.includes(randomNumber)) {
            x.push(randomNumber);
        }
        
    }
    return x;
}
console.log(randomNumbers());


function lotteryNumbers() {
    let numbers = randomNumbers();
    // console.log(numbers);
    let lucky = numbers.sort((a, b) => a - b).join("-");
    // console.log(lucky);
    let ek1 = ((Math.floor(Math.random() * 90) + 1) + "").padStart(2, "0");
    let ek2 = ((Math.floor(Math.random() * 90) + 1) + "").padStart(2, "0");
    let textp = lucky + " | " + ek1 + " | " + ek2;
    // console.log(textp);
    return textp;
}



button.addEventListener("click", () => {
    text.innerHTML = "";
    let number = numberimput.value;
    // console.log(number);
    for (let i = 0; i < number; i++){
        let newp = document.createElement("p");
        newp.innerHTML = lotteryNumbers();
        text.style.display = "block";
        text.appendChild(newp);
        let hr = document.createElement("hr");
        text.appendChild(hr);
        

    }

});