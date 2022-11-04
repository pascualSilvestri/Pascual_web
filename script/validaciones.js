

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
let cont_form = document.querySelector(".contacto_form");

let label_nombre = document.querySelector(".form_label_nombre");
let label_email = document.querySelector(".form_label_email");
let label_asunto = document.querySelector(".form_label_asunto");

let errorN = false
let errorE = false
let errorA = false
let errorM = false
let errorB = false


const redex = {
    'nombre': /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    'email':/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'asunto': /[a-zA-Z0-9][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
};

const errorMensaje= {
    'nombre': `No puede estar vacio ni contener numeros, min-3 letras.`,
    'email': `El formato correcto es ejemplo@correo.com`,
    'asunto': `No puede estar vacio debe contener min 2 letra`,
    'btnError':"Por favor complete los campo correctamente."
}

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
    input.addEventListener("blur", e =>{
        if(e.target.id == "form-nombre"){

            if(input.value != ""&& redex["nombre"].test(input.value)){
                valido(cont)
                eliminarError(".nombre")
                errorN = false
            }else 
                if(!errorN){
                error(cont)
                divError(errorMensaje['nombre'],cont_nombre,"nombre");
                errorN = true
            }
        }
        if(e.target.id== "form-email"){
            if(input.value != ""&& redex["email"].test(input.value)){
                console.log(cont)
                valido(cont)
                eliminarError(".email")
                errorE = false
            }else 
            if(!errorE){
                error(cont)
                divError(errorMensaje['email'],cont_email,"email");
                errorE = true
            }
        }

        if(e.target.id == "form-asunto"){

            if(input.value != ""&& redex["asunto"].test(input.value)){
                valido(cont)
                eliminarError(".asunto")
                errorA= false   
            }else 
                if(!errorA){
                error(cont)
                divError(errorMensaje['asunto'],cont_asunto,"asunto");
                errorA=true
            }
        }

        if(e.target.id == "form-mensaje"){
            if(input.value != ""&& redex["asunto"].test(input.value)){
                valido(cont)
                errorM = false
            }else{
                error(cont)
                errorM = true
            }
        }
    });

}

function eliminarError(clase){
    let div = document.querySelector(clase);
    div.remove()
}

btn.addEventListener("click",e=>{
    if(!errorA && !errorE && !errorM && !errorN&& nombre.value !=""&&email.value != "" && asunto.value != ""){
        alert("Envio con exito");
        nombre.value="";
        email.value="";
        asunto.value="";
        textarea.value="";
        sinEstado(cont_nombre);
        sinEstado(cont_email);
        sinEstado(cont_asunto);
        eliminarError(".error-btn");
        errorB= false
    } else
        if(!errorB){
        divError(errorMensaje['btnError'],cont_form,"error-btn");
        errorB= true
    }
});

document.addEventListener("scroll",e =>{

    let scrolly = e.path[1].window.scrollY
    if(scrolly >= 200){
        btnArriva.style.display ="flex"
    }
    if(scrolly < 200){
        btnArriva.style.display ="none"
    }
    
});

function divError(error,cont,clase){
    let div = document.createElement("div");
    let cont_div = document.createTextNode(error)
    div.appendChild(cont_div);
    div.classList.add("mensaje-error",clase)
    cont.append(div);
}


function prueba(){
    document.addEventListener("click",e=>{

    })
}


    validar(nombre,cont_nombre);
    validar(email,cont_email);
    validar(asunto,cont_asunto);
    validar(textarea,cont_mensaje)


//Main
