const jobsListingSection = document.querySelector('.job-listings');

jobsListingSection?.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});
        
