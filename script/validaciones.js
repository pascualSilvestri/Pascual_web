

let nombre = document.querySelector("#form-nombre");
let email = document.querySelector("#form-email");
let textarea = document.querySelector("#form-mensaje");
let asunto = document.querySelector("#form-asunto");

let btn = document.querySelector(".contacto_btn");
let btnArriva = document.querySelector(".volverArriba")

let cont_nombre = document.querySelector(".form_cont_nombre");
let cont_email = document.querySelector(".form_cont_email");
let cont_asunto = document.querySelector(".form_cont_asunto");
let cont_mensaje = document.querySelector(".form_cont_mensaje");

let label_nombre = document.querySelector(".form_label_nombre");
let label_email = document.querySelector(".form_label_email");
let label_asunto = document.querySelector(".form_label_asunto");


const redex = {
    'nombre': /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    'email':/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'asunto': /[a-zA-Z0-9][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

};

validar(nombre,cont_nombre);
validar(email,cont_email);
validar(asunto,cont_asunto);
validar(textarea,cont_mensaje)

function error(cont){
    cont.classList.add("sin-validar");
    cont.classList.remove("valida");
}

function valido (cont){
    cont.classList.remove("sin-validar")
    cont.classList.add("valida");
}


function sinEstado(cont){
    cont.classList.remove("sin-validar")
    cont.classList.remove("valida");
}

function validar(input,cont){
    input.addEventListener("blur",e =>{
        if(e.path[0].id == "form-nombre"){

            if(input.value == ""){

                error(cont)
                input.placeholder =`El campo no puede estar vacio`

            }

            if(input.value != ""&& redex["nombre"].test(input.value)){

                valido(cont)

            }else{
                error(cont)
                input.placeholder =`No puede estar vacio ni contener numeros, min-2 letras.`
            }
        }
        if(e.path[0].id == "form-email"){

            if(input.value == ""){

                error(cont)
                input.placeholder =`El campo no puede estar vacio`

            }

            if(input.value != ""&& redex["email"].test(input.value)){

                valido(cont)

            }else{
                error(cont)
                input.placeholder =`El formato correcto es ejemplo@correo.com`
            }
        }
        if(e.path[0].id == "form-asunto"){

            if(input.value == ""){

                error(cont)
                input.placeholder =`El campo no puede estar vacio`

            }

            if(input.value != ""&& redex["asunto"].test(input.value)){

                valido(cont)

            }else{
                error(cont)
                input.placeholder =`No puede estar vacio debe contener min 2 letra`
            }
        }
        if(e.path[0].id == "form-mensaje"){


            if(input.value != ""&& redex["asunto"].test(input.value)){

                valido(cont)

            }else{
                error(cont)
            }
        }
        
    });
}

btn.addEventListener("click",e=>{
    if(nombre.value =="" || email.value == ""|| asunto.value =="" || textarea.value ==""){
        alert("Todos los campos tienen que estar completo.");
    } else{
        alert("Envio con exito");
        nombre.value="";
        email.value="";
        asunto.value="";
        textarea.value="";
        sinEstado(cont_nombre);
        sinEstado(cont_email);
        sinEstado(cont_asunto);
    }
});


document.addEventListener("scroll",e =>{

    let scrolly = e.path[1].window.scrollY
    if(scrolly > 200){
        btnArriva.style.display ="flex"
    }
    if(scrolly < 200){
        btnArriva.style.display ="none"
    }
    
    
});