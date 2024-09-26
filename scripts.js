const home = document.getElementById('menu')
const homeList = document.getElementById('nav')
const cancel = document.querySelector('.fa-circle-xmark')
const mini = document.querySelector('minimize')

menu.addEventListener('click', ()=>{
    homeList.style.display = "flex"
}) 
function cancelMenu() {
    homeList.style.display = "none"
}

cancel.addEventListener("click", cancelMenu)
mini.addEventListener("click", cancelMenu)