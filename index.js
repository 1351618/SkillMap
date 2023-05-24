
// при клике на иконку профиль - открывается окно с профилем 
document.getElementById("open_profile").addEventListener("click", function(){
    document.getElementById("main__modal").classList.add("open")
})

// при клике на крестик окно профиля закрывается
document.getElementById("main__modal-close-profil").addEventListener("click", function(){
    document.getElementById("main__modal").classList.remove("open")
})

// при нажатие на esc окно профиля закрывается
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("main__modal").classList.remove("open")
    }
})

// при клики на внешнюю обл окно профиля закрывается


// после загрузки cкрывает заставку и отображает карту навыков
document.addEventListener('DOMContentLoaded', function() {
    let content = document.querySelector('.main__content');
    let video = document.querySelector('.main__content_video-intro');
    let map = document.querySelector('.main__map');
    let navigation_panel = document.querySelector('.main__navigation-panel');
    let desk_elements = document.querySelector('.main__desk-elements');

    content.addEventListener('click', function() {
        video.style.display = 'none';
        map.style.display = 'block';
        navigation_panel.style.display = 'block';
        desk_elements.style.display = 'block';
    });
});


// стиль для всплывающих подсказок

