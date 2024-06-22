const menus = document.querySelectorAll(".drop-menu")
const burguer = document.querySelector(".burguer")
const cross = document.querySelector(".cross")
menus.forEach(menu => {
    menu.addEventListener("click", (e) => {
        let height = 0
        e.preventDefault();
        menu.classList.toggle("active");
        let dropMenu = menu.nextElementSibling;

        if (dropMenu.clientHeight === 0){
            height = dropMenu.scrollHeight
        }
        dropMenu.style.height = `${height}px`

    })
})
burguer.addEventListener("click", (e) => {
    e.preventDefault()
    let right = 0
    let slideMenu = burguer.nextElementSibling
    slideMenu.classList.add("active-slideMenu");
    console.log(slideMenu)
})
cross.addEventListener("click", (e) => {
    e.preventDefault()
    burguer.nextElementSibling.classList.remove("active-slideMenu");
})