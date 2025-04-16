window.scrollTo({
    top: 0
})
let searchInput = document.querySelector('#search-input');

let cartIndicator = document.querySelector('.cart-indicator');
localStorage.cartItems = localStorage.cartItems ? localStorage.cartItems : 2;
cartIndicator.innerText = localStorage.cartItems;


let navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    let navbarMobile = document.querySelector('.navbar-mobile')
    navbarMobile.firstElementChild.innerHTML = "";
    navbarMobile.classList.toggle('show');
    document.querySelectorAll('.navbar-link').forEach((l, i) => {
        if (i == 0) return
        let el = document.createElement('a');
        el.href = "#";
        el.innerText = l.innerText;
        el.classList.add('navbar-link')
        navbarMobile.firstElementChild.appendChild(el);
    })
})

function search(ev) {
    let warning = document.querySelector('.input-wrapper span') ? document.querySelector('.input-wrapper span') : document.createElement('span');
    searchInput.classList.remove('invalid-input');
    if (ev.type == 'keydown') {
        // Se não for enter pode continuar digitando
        if (ev.key !== "Enter") {
            return;
        }
    }


    if (ev.type == 'click' || ev.key == 'Enter') {
        warning.innerText = `Você pesquisou por: ${searchInput.value}`;

    }
    if (searchInput.value.length == 0) {
        searchInput.classList.add('invalid-input');
        warning.innerText = "Por favor, insira uma busca válida."
        warning.style.color = 'red';
    } else {
        warning.style.color = '';
    }
    let inputWrapper = document.querySelector('nav .input-wrapper');
    inputWrapper.appendChild(warning);
    searchInput.value = "";
}

const productButtons = document.querySelectorAll('.product-card button.button');

productButtons.forEach(b => b.addEventListener('click', addToCart));

const collapseButton = document.querySelector("#categories-collapse");
const dropdownElement = document.querySelector('.dropdown');

let leftPartDropdown = document.querySelector('.dropdown .left-part');
let rightPartDropdown = document.querySelector('.dropdown .right-part');
collapseButton.addEventListener('click', () => {
    dropdownElement.classList.toggle('hidden');
    if (document.querySelector('.dropdown h2')) {
        document.querySelector('.dropdown h2').remove();
    }
    leftPartDropdown.style.display = 'block';
})

const buttonsLeftDropdown = dropdownElement.querySelectorAll('button[data-department]');

buttonsLeftDropdown.forEach(b => b.addEventListener('mouseover', displayCategory))
buttonsLeftDropdown.forEach(b => b.addEventListener('click', expandCategory))
let categoriesSectionList = document.querySelectorAll('.department-content[data-department]');

function displayCategory(event) {
    buttonsLeftDropdown.forEach(b => b.classList.remove('active'));

    categoriesSectionList.forEach(i => {
        i.style.display = 'none';
        i.style.opacity = 0
    })
    let buttonHovered = event.target;
    buttonHovered.classList.add('active');
    let section = Array.from(categoriesSectionList).find(i => i.dataset.department == buttonHovered.dataset.department);
    section.style.display = 'block'
    setTimeout(() => section.style.opacity = 1, 100)

}

function expandCategory(event) {

    leftPartDropdown.style.display = 'none';
    let h2 = document.createElement('h2');
    h2.innerText = event.currentTarget.innerText;
    let firstChild = rightPartDropdown.querySelector('div');

    firstChild.insertBefore(h2, firstChild.firstElementChild);

}