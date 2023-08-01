
let countBalnc = 0;
  
// BUDGET FORM
function addBudget() {
   document.getElementById("bud").innerText  = document.getElementById("bdgt").value;
}


// EXPENSE FORM
function addExpense() {
let a = document.getElementById("title").value;
let b = document.getElementById("cost").value;
localStorage.setItem(a, b);
let div1 = document.querySelector(".expense-list");
let table = document.createElement("table");
let row = document.createElement("tr");
row.setAttribute("class", "myRow");
table.appendChild(row);
div1.appendChild(table);
let col1 = document.createElement("td");
let col2 = document.createElement("td");
let col3 = document.createElement("td");
let btn = document.createElement("button");


btn.appendChild(document.createTextNode("delete"));
col1.appendChild(document.createTextNode(a));
col2.appendChild(document.createTextNode(localStorage.getItem(a)));
col3.appendChild(btn);
row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);



document.getElementById("exp").innerText = localStorage.getItem(a);

countBalnc = countBalnc + +b;
document.getElementById("bal").innerText = document.getElementById("bdgt").value - countBalnc;

btn.addEventListener("click", function (){
    let myOldRow = row;
   row.remove();
   document.getElementById("bal").innerText = document.getElementById("bdgt").value - document.getElementById("exp").innerText ;
 console.log(countBalnc);

})
}


