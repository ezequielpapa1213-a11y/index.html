let palito = document.getElementById("submenu");
let opennes = document.getElementById("abrir");
let closes = document.getElementById("cerrar");

opennes.addEventListener("click", () => {
  palito.style.display = "flex"; 
  closes.style.display="block"
});

closes.addEventListener("click", () => {
  palito.style.display = "none";

});
