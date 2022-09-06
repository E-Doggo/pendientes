import { transformFileAsync } from "@babel/core";
import sumar from "./sumador";

const tarea = document.querySelector("#tarea");
const form = document.querySelector("#sumar-form");
const button = document.querySelector("#registro")
const ol = document.querySelector("#resultado-ol");

let list = []
let lista = ""

button.addEventListener("click", (event) => {
  event.preventDefault();

  list.push(tarea);

  if (tarea.value.trim() == '' || tarea.value == null )
  {
    alert("No es posible registrar una tarea pendiente sin descripción");
  }
  else
  {
    for (var i=0; i <list.length; i++)
    {
      console.log(list[i].value)
      lista+= `<li>${list[i].value}</li>`
    }  
    ol.innerHTML =lista;

  }
});
