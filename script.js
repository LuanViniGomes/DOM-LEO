
caixas = document.querySelectorAll(".caixa");
caixas[0].addEventListener("click", function() {
caixas[0].style.border = "2px solid green";
});

caixas[1].addEventListener("click", function() {
caixas[1].style.border = "2px solid green";
});

caixas[2].addEventListener("click", function() {
caixas[2].style.border = "2px solid green";
});

btnsecund = document.querySelector("#btnsec");
btnsecund.addEventListener("click", function() {
    caixas[0].style.border = "";
    caixas[1].style.border = "";
    caixas[2].style.border = "";


} )