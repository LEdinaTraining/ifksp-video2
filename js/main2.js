// Variables and calculation bases.
function calcAmount() {
    let price = 1000;
    let deliveryPrice = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let amount = amountNumber * price;
    if (amount < 0) {
        amount = 0;
        deliveryPrice = 0;
    }
    else {
        amount = amount;
    }

    validItems(amountNumber);
    showSumAmount(deliveryPrice, amount);
}

// Quantity control.
function validItems(amountNumber) {
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        amountNumber = amountNumber;
    }
}

// Calculation of the amount to be paid.
function showSumAmount(deliveryPrice, amount) {
    let showAmount = document.querySelector("span.show-amount");
    if (amount >= 5000) {
        showAmount.innerHTML = amount;
    }
    else {
        amount = amount + deliveryPrice;
        showAmount.innerHTML = amount;
    }
}