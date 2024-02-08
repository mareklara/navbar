const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener('click', () =>{
    nav.classList.add("visible-nav-bar");
})

close.addEventListener('click', () => {
    nav.classList.remove("visible-nav-bar")
})