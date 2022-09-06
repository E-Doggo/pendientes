import { transformFileAsync } from "@babel/core";
import sumar from "./sumador";

const tarea = document.querySelector("#tarea");
const form = document.querySelector("#sumar-form");
const button = document.querySelector("#registro")
const div = document.querySelector("#resultado-div");

//let list = []

button.addEventListener("click", (event) => {
  event.preventDefault();

  //list.push(tarea);

  div.innerHTML = "<p>"+ tarea.value.toString();

  /*for (var i=0; i <list.length; i++)
  {
    div.innerHTML = `<li>${list[i].value}<li>`
  }*/
  
});
