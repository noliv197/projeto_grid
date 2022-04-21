var botao = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu-lateral");

botao.addEventListener("click",function(){
    menu.classList.toggle("menu-lateral--ativo")
})
