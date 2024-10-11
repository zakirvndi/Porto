document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) { 
            navbar.classList.remove('bg-transparent', '-translate-y-full');
            navbar.classList.add('bg-dark_2', 'translate-y-0');
        } else {
            navbar.classList.remove('bg-dark_2', 'translate-y-0');
            navbar.classList.add('bg-transparent', '-translate-y-full');
        }
    });
});