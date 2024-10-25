const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");

window.onload = showQuote;

dice.addEventListener("click", function(){
    adviceNum.textContent = "";
    adviceText.textContent = "Loading....";
    showQuote();
    // console.log('clicked');
});

function showQuote() {
    const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;

    fetch(url)
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    })
}