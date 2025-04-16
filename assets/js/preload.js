let preloader = document.querySelector("#preloader");
window.onload = loadPage();

function loadPage() {
    window.scroll({
        top: 0
    })
    document.body.classList.add("loading");
    setTimeout(() => {
        preloader.querySelector('.ctn-preloader').classList.add("loaded");
        setTimeout(() => {
            preloader.remove();
        }, 300);
        document.body.classList.remove("loading");
    }, 800)
}