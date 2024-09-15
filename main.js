// script.js
const toggleSwitch = document.querySelector('#checkbox');
const body = document.body;

toggleSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});
