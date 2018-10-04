numero = 0;
function hello(){
  alert("Hello World");
  document.querySelector("h2").innerHTML = "";
}
function bye(){
  document.querySelector("h2").innerHTML = "BYE";
}
function contar(){
  numero += 1;
  document.querySelector("#contador").innerHTML = numero;

}


document.addEventListener('DOMContentLoaded',function(){
  document.querySelector("#descontar").onclick = descontar;
})


function descontar(){
  numero -= 1;
  document.querySelector("#contador").innerHTML = numero;

}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector("#formulario").onsubmit = saludar;
})

nombre = "Hola: ";
function saludar(){
  nombre += document.querySelector("#texto").value;
  alert(nombre);
}



document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("botones").querySelectorAll(".btn.btn-primary").forEach(function(elemento){
    elemento.onclick = function(){
      document.querySelector("#color").style.color = elemento.dataset.color;
    }
  })
})


document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector("#colores").onchange = function(){
      document.querySelector("#hello").style.color = this.value;
  }
})
