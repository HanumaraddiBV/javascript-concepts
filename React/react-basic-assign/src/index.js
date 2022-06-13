import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const orderedList = React.createElement(
  "h1",
  {},
  "Ordered List",
  React.createElement("ol", {}, [
    React.createElement("li", {}, "Reddy"),
    React.createElement("li", {}, "Sham"),
    React.createElement("li", {}, "Ram"),
  ])
);

const unorderedList = React.createElement(
  "h1",
  {},
  "Un Ordered List",
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Reddy"),
    React.createElement("li", {}, "Sham"),
    React.createElement("li", {}, "Ram"),
  ])
);
const mainDiv = React.createElement("div", {}, [
  orderedList,
  unorderedList,
  "------------------------------------------",
]);

const inpEle = React.createElement("input", {
  type: "text",
  placeholder: "Enter value",
  id: "inp",
});

var inpval;
var txtBox;
let isChecked = true;
let radioBox = React.createElement("input", {
  id: "inpDiv1",
  type: "checkbox",
  onClick: isCheck,
});

txtBox = React.createElement(
  "p",
  { id: "inpDiv", style: { border: "1px solid black" ,width:"200px",height:"20px",marginTop:"20px"} }
);
// console.log('inpval:', inpval)

function isCheck(inpval) {
  console.log("hii");
  var data = document.getElementById("inp").value;
  var inp_div = document.getElementById("inpDiv");
  console.log('data:', data)
  inp_div.innerText = data;
  if (isChecked == true) {
    isChecked = false;
    inp_div.style.display = "block";
  } else {
    inp_div.style.display = "none";
    isChecked = true;
  }
  console.log("isChecked:", isChecked);
}

const parDiv = React.createElement("div", {}, [mainDiv, inpEle, radioBox]);
const txtBoxDiv = React.createElement("div", {}, [parDiv, txtBox]);
ReactDOM.render(
  txtBoxDiv, //what
  document.getElementById("root")
);
