let preloader = document.querySelector("#preload");
window.onload = loadPage();

function loadPage() {
    window.scroll({
        top: 0
    })
    document.body.classList.add("loading");
    setTimeout(() => {
        preloader.classList.add("preloader-invisible");
        setTimeout(() => {
            preloader.remove();
        }, 300);
        document.body.classList.remove("loading");

    }, 800)
}
