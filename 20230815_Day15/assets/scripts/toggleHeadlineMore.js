//toggleMailLink.js
const toggleLinkHeadlineMore = document.getElementById('toggleHeadlineMore');
const hiddenHeadlineMore = document.getElementById('hiddenHeadlineMore');

toggleLinkHeadlineMore.addEventListener('click', function(event) {
    event.preventDefault();
    hiddenHeadlineMore.classList.toggle('hidden-element-headline-more');
    hiddenHeadlineMore.classList.toggle('visible-element-headline-more');
});
