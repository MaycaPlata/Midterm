document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Navigation link clicked: ' + this.innerText);
        });
    });
});
