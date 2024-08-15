function encriptar(texto) {
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
          alert("El texto no puede contener mayúsculas o vocales acentuadas");
    } else {
      return texto
        .replace(/a/g, "aild")
        .replace(/e/g, "sadau")
        .replace(/i/g, "rentk")
        .replace(/o/g, "oktobm")
        .replace(/u/g, "scolc");
    }
  }
  
  function desencriptar(texto) {
    return texto
      .replace(/aild/g, "a")
      .replace(/sadau/g, "e")
      .replace(/rentk/g, "i")
      .replace(/oktobm/g, "o")
      .replace(/scolc/g, "u");
  }
  
  function clickCopiarTexto() {
    let botonCopiar = document.getElementById("copiar");
    if (!botonCopiar) {
      botonCopiar = document.createElement("button");
      botonCopiar.id = "copiar";
      botonCopiar.classList.add("copiar");
      botonCopiar.textContent = "Copiar";
      botonCopiar.onclick = function () {
        let texto = document.querySelector(".p-resultado").textContent;
        navigator.clipboard.writeText(texto).then(() => {
          const mensajeConfirmacion = document.createElement("div");
          mensajeConfirmacion.textContent = "Texto copiado correctamente!";
          mensajeConfirmacion.style.color = "green";
          mensajeConfirmacion.style.position = "absolute";
          mensajeConfirmacion.style.bottom = "-1px";
          mensajeConfirmacion.style.left = "0";
          mensajeConfirmacion.style.right = "0";
          mensajeConfirmacion.style.textAlign = "center";
          document.querySelector(".contenedor-resultado").appendChild(mensajeConfirmacion);
          setTimeout(() => {
            mensajeConfirmacion.remove();
          }, 2000);
        });
      };
      document.querySelector(".contenedor-resultado").appendChild(botonCopiar);
    }
  }
  
  function clickEncriptar() {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    try {
      let textoEncriptado = encriptar(texto);
      let resultado = document.querySelector(".contenedor-inicial");
      resultado.innerHTML = "";
          let contenedor = document.createElement('div');
          contenedor.classList.add('contenedor-resultado');
      let parrafo = document.createElement("p");
      parrafo.textContent = textoEncriptado;
          parrafo.classList.add('p-resultado');
          contenedor.appendChild(parrafo);
      resultado.appendChild(contenedor);
      clickCopiarTexto();
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  function clickDesencriptar() {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
      let resultado = document.querySelector('.contenedor-inicial');
    resultado.innerHTML = '';
      let contenedor = document.createElement('div');
      contenedor.classList.add('contenedor-resultado');
    let parrafo = document.createElement('p');
    parrafo.textContent = textoDesencriptado;
      parrafo.classList.add('p-resultado');
      contenedor.appendChild(parrafo);
    resultado.appendChild(contenedor);
    clickCopiarTexto();
  }
  
  document.getElementById("encriptar").addEventListener("click", clickEncriptar);
  document
    .getElementById("desencriptar")
    .addEventListener("click", clickDesencriptar);
  