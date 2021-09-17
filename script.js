// selectors

let bill = document.querySelector("#bill");
let tipBtns = document.querySelectorAll(".tip-btn");
let peopleContainer = document.querySelector("#people");
let customBtn = document.querySelector(".custom-btn");
let error = document.querySelector(".error-message");
let resetBtn = document.querySelector(".reset");

let tipContainer = document.querySelector(".tip-amount");
let totalContainer = document.querySelector(".total-amount");

// error message
let handleError = () => {
  error.style.display = "block";
  peopleContainer.style.border = "2px solid red";
  tipContainer.innerHTML = "$0.00";
  totalContainer.innerHTML = "$0.00";
};

// handle tip functionality
tipBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    customBtn.value = "";
    let tip = btn.value;
    peopleContainer.value < 1 ? handleError() : setValues(tip);
    setTimeout(() => {
      error.style.display = "none";
      peopleContainer.style.border = "none";
    }, 2000);
  });
});

// custom button
customBtn.addEventListener("input", (e) => {
  let customTip = e.target.value / 100;
  peopleContainer.value < 1 ? handleError() : setValues(customTip);
  setTimeout(() => {
    error.style.display = "none";
    peopleContainer.style.border = "none";
  }, 2000);
});

// calculate tip
const setValues = (tipAmt) => {
  let billPerPerson = bill.value / peopleContainer.value;
  let tipPerPerson = billPerPerson * tipAmt;
  total = billPerPerson + tipPerPerson;
  tipContainer.innerHTML = `$${tipPerPerson.toFixed(2)}`;
  totalContainer.innerHTML = `$${total.toFixed(2)}`;
};

// reset values
const resetValues = () => {
  bill.value = "";
  customBtn.value = "custom";
  peopleContainer.value = "";
  tipContainer.innerHTML = "$0.00";
  totalContainer.innerHTML = "$0.00";
};

resetBtn.addEventListener("click", () => {
  resetValues();
});
