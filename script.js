let loc = document.getElementById("location");
let date = document.getElementById("date");
let amount = document.getElementById("amount");
const button = document.getElementById("btn");
const table = document.getElementById("table");

function addNewItem() {
  if (loc.value === "" && date.value === "" && amount.value === "") {
    alert("You must type in something");
  } else if (loc.value === "" || date.value === "" || amount.value === "") {
    alert("Please fill in all fields");
  } else {
    let newRow = table.insertRow();
    let firstC = newRow.insertCell(0);
    let secondC = newRow.insertCell(1);
    let thirdC = newRow.insertCell(2);
    firstC.innerText = loc.value;
    secondC.innerText = date.value;
    thirdC.innerText = amount.value;
    loc.value = "";
    date.value = "";
    amount.value = "";

    let x = document.createElement("span");
    x.setAttribute("title", "Delete note");
    let xInput = document.createTextNode("x");
    x.classList.add("close");
    x.appendChild(xInput);
    thirdC.appendChild(x);

    x.onclick = function () {
      let grandpa = this.parentElement.parentElement;
      grandpa.remove();
    };
  }
}

button.addEventListener("click", addNewItem);
// let deleteItem = document.querySelector('.close');
// deleteItem.addEventListener('click', function() {

// })
// let myStorage = window.localStorage;
// myStorage.setItem('first', 'value')
// console.log(myStorage);
