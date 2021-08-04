const loc = document.getElementById("location");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const button = document.getElementById("btn");
const table = document.getElementById("table");
// ////////////////////////////////////////////////////
const myStorage = window.localStorage;
// ////////////////////////////////////////////////////
const list = [];
///////////////////////////////////////////////////////
window.addEventListener("load", () => {
  loc.focus();
});
// ////////////////////////////////////////////////////
table.addEventListener("click", function (e) {
  if (!e.target.classList.contains("close")) return;
  e.target.parentElement.parentElement.remove();
});
// ///////////////////////////////////////////////////
function addNewItem() {
  if (loc.value === "" && date.value === "" && amount.value === "") {
    alert("You must type in something");
  } else if (loc.value === "" || date.value === "" || amount.value === "") {
    alert("Please fill in all fields");
  } else {
    renderNote();
  }
}
function saveNote() {
  const obj = {};
  obj.location = loc.value;
  obj.dat = date.value;
  obj.am = amount.value;
  obj.id = Date.now();
  // myStorage.setItem("first", obj);
  list.push(obj);
}
function renderNote() {
  const newRow = table.insertRow();
  const firstC = newRow.insertCell(0);
  const secondC = newRow.insertCell(1);
  const thirdC = newRow.insertCell(2);
  // //////////////////////////////////////////////
  firstC.innerText = loc.value;
  secondC.innerText = date.value;
  thirdC.innerText = amount.value;
  // ///////////////////////////////////////////////
  saveNote();
  // ///////////////////////////////////////////////
  loc.value = "";
  date.value = "";
  amount.value = "";
  // ////////////////////////////////////////////////
  const x = document.createElement("span");
  x.setAttribute("title", "Delete note");
  const xInput = document.createTextNode("x");
  x.classList.add("close");
  x.appendChild(xInput);
  thirdC.appendChild(x);
}

button.addEventListener("click", addNewItem);

// myStorage.setItem('first', 'value')
console.log(myStorage);
myStorage.clear();
