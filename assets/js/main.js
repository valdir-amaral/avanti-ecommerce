let searchInput = document.querySelector('#search-input');

function search(ev) {
    searchInput.classList.remove('invalid-input');
    if (ev.type == 'keydown') {
        // Se não for enter pode continuar digitando
        if (ev.key !== "Enter") {
            return;
        }
    }

    if (searchInput.value.length == 0) {
        searchInput.classList.add('invalid-input');
        return;
    }
    
    alert(`Você pesquisou por ${searchInput.value}`);
}

const productButtons = document.querySelectorAll('.product-card button.button');
console.log(productButtons);

productButtons.forEach(b => b.addEventListener('click', addToCart));

function addToCart(ev) {
    console.log(ev);
    let btnSelected = ev.currentTarget;
    btnSelected.innerHTML = '<span class="loader-product"></span>';
    btnSelected.setAttribute('disabled', true);

    setTimeout(() => {
        const toastHTML = `
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
            </div>
        `;

        // Cria um elemento temporário para inserir o HTML
        const temp = document.createElement('div');
        temp.innerHTML = toastHTML;

        // Adiciona o toast ao body
        document.body.appendChild(temp.firstElementChild);

        btnSelected.setAttribute('disabled',false);
        btnSelected.innerHTML = "Comprar";
       
    }, 800)
}