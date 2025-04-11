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