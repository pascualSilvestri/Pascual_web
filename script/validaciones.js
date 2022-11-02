

let nombre = document.querySelector("#form-nombre");
let examil = document.querySelector("#form-email");
let textarea = document.querySelector("#form-textarea");
let asunto = document.querySelector("#form-asunto");
let btn = document.querySelector(".contacto_btn");

nombre.addEventListener(blur,e =>{
    if(nombre.value == ""){
        alert("esta vacio");
    }
});


function validar(){

}