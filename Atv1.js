const titulos = document.querySelectorAll("li h4");
const menu1 = document.querySelector(".menu");

function menu(){
    menu1.classList.toggle("menuOpen");
}

titulos.forEach((titulo) => {
    titulo.addEventListener("mouseover", () => {
        const img = titulo.parentElement.querySelector(".img-opala-foda");
        img.classList.add("opala-aberto");
    });
    titulo.addEventListener("mouseleave", () => {
        const img2 = titulo.parentElement.querySelector(".img-opala-foda");
        img2.classList.remove("opala-aberto");
    });
});