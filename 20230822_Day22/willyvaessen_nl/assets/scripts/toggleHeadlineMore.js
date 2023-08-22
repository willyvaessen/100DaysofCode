//toggleMailLink.js
const toggleLinkHeadlineMoreNL = document.getElementById('toggleHeadlineMore-nl');
const toggleLinkHeadlineMoreEN = document.getElementById('toggleHeadlineMore-en');
const hiddenHeadlineMore = document.getElementById('hiddenHeadlineMore');

toggleLinkHeadlineMoreNL.addEventListener('click', function(event) {
    event.preventDefault();
    hiddenHeadlineMore.classList.toggle('hidden-element-headline-more');
    hiddenHeadlineMore.classList.toggle('visible-element-headline-more');
});

toggleLinkHeadlineMoreEN.addEventListener('click', function(event) {
    event.preventDefault();
    hiddenHeadlineMore.classList.toggle('hidden-element-headline-more');
    hiddenHeadlineMore.classList.toggle('visible-element-headline-more');
});