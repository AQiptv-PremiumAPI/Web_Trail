// Toggle menu bar functionality
const menuToggle = document.getElementById('menuToggle');
const menuOptions = document.getElementById('menuOptions');

menuToggle.addEventListener('click', () => {
    const isVisible = menuOptions.style.display === 'block';
    menuOptions.style.display = isVisible ? 'none' : 'block';
});
