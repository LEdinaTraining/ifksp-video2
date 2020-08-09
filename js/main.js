function calcAmount() {
    let price = 1000;
    let deliveryPrice = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}
function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}
function compute(x, y, z) { return x * y + z; }
compute(0, 10, 1);

console.log(compute);

// Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text form-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// Window event.
/*
let sendButton = document.querySelector("form .btn.btn-primary");
*/

/*
sendButton.onclick = function() {
    alert("Hello JS!");
}
*/
/*
sendButton.addEventListener("click", function () {
    alert("Hello JS!");
});
*/

/*
window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);
});
*/

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        }
        console.log(this);
    });
    