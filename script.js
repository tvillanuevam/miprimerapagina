//alert("Este es mi primera chamba");
//let nombre = "Marta";
//nombre = "Maria";
//var nombre1 = "Marta";

//const nombre2 = "Marta";

//nombre2 = "Maria";
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

let presentacion = "Hola"

let titulo = document.querySelector(".parrafo1");

function cambiarTexto (presentacion) {
    let contenido = 'Bienvenido a mi $(presentacion)! Aqui aprenderas mas sobre mi.';
    return contenido;
}
parrafo.innerText = cambiarTexto ("XDDDD")

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formu.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});