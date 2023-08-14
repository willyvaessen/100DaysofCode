const toggleLink = document.getElementById('toggleMailLink');
const hiddenMail = document.getElementById('HiddenMail');

toggleLink.addEventListener('click', function(event) {
    event.preventDefault();
    hiddenMail.classList.toggle('hidden-element');
    hiddenMail.classList.toggle('visible-element');
});
