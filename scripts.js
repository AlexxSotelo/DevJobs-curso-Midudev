/*botón*/ 
const jobsListingSection = document.querySelector('.job-listings');

jobsListingSection?.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});
        
/*filtros de busqueda*/ 
const filtro = document.querySelector('#location');
const mensaje = document.querySelector('#filter-selected-value');

filtro?.addEventListener('click', (event) => {
    const selectedLocation = filtro.value;

    if (selectedTech) {
        mensaje.textContent = `Has seleccionado: ${selectedLocation}`;
    } else {
        mensaje.textContent = '';
    }
});

/*barra de busqueda*/
const searchInput = document.querySelector('#empleos-search-input');

searchInput?.addEventListener('input', (event) => {
    console.log(searchInput.value);
});

searchInput?.addEventListener('blur', (event) => {
    console.log('se perdió el foco');
});

const searchForm = document.querySelector('#empleos-search-form');

searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
});