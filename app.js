const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnCopiar = document.getElementById("btn-copiar");
const txtEncriptado = document.querySelector(".texto-encriptador");
const txtAviso = document.querySelector(".texto-aviso");
const txtDesencriptado = document.querySelector(".texto-desencriptador");
const contenidoAside = document.querySelector(".aside-contenedor");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptado.value;
    //console.log(texto);
    let textoFinal = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    //console.log(textoFinal);

    if(texto == ""){
        txtAviso.textContent = "El campo esta vacio";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else if(texto !== textoFinal){
        txtAviso.textContent = "No debe tener acentos, ni caracteres especiales";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else if(texto !== texto.toLowerCase()){
        txtAviso.textContent = "El texto debe ser en minúsculas";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");
    }
    txtDesencriptado.innerHTML = texto;
    btnCopiar.style.visibility = "inherit"
    contenidoAside.remove();
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptado.value;
    //console.log(texto);
    let textoFinal = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(textoFinal);

    if(texto == ""){
        txtAviso.textContent = "El campo esta vacio";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else if(texto !== textoFinal){
        txtAviso.textContent = "No debe tener acentos, ni caracteres especiales";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else if(texto !== texto.toLowerCase()){
        txtAviso.textContent = "El texto debe ser en minúsculas";
        setTimeout(()=>{
            txtAviso.textContent = "";
        },3000)
    }
    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");
    }
    txtDesencriptado.innerHTML = texto;
    btnCopiar.style.visibility = "inherit"
    contenidoAside.remove();
});

btnLimpiar.addEventListener("click", e=>{
    e.preventDefault();
    txtEncriptado.value = "";
    txtDesencriptado.textContent = "";
});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = txtDesencriptado;
    copiar.select();
    document.execCommand("copy");
});