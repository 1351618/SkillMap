
// при клике на иконку профиль - открывается окно с профилем 
document.getElementById("open_profile").addEventListener("click", function(){
    document.getElementById("main__modal").classList.add("open")
})

// при клике на крестик окно профиля закрывается
document.getElementById("main__modal-close").addEventListener("click", function(){
    document.getElementById("main__modal").classList.remove("open")
})

// при нажатие на esc окно профиля закрывается
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("main__modal").classList.remove("open")
    }
})

// при клики на внешнюю обл окно профиля закрывается
