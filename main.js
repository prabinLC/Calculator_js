// document.body.innerHTML = "this is the test programme";
"use strict";
function calculator(values1, values2) {
  var values1 = parseInt(document.querySelector("#value1").value);
  var values2 = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var result = document.querySelector("#results ");
  var calculate;
  if (op == "add") {
    calculate = values1 + values2;
  } else if (op == "sub") {
    calculate = values1 - values2;
  } else if (op == "div") {
    calculate = values1 * values2;
  } else if (op == "mul") {
    calculate = values1 / values2;
  }
  result.innerHTML = calculate;
}
