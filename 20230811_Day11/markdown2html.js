// Markdown to HTML converter.js

const markdownInput = document.getElementById('markdownInput');
const htmlOutput = document.getElementById('htmlOutput');

const converter = new showdown.Converter();

// Function to convert Markdown to HTML
function convertMarkdownToHtml() {
  const markdownContent = markdownInput.value;
  htmlOutput.innerHTML = converter.makeHtml(markdownContent); // Place the HTML content in the div
}

// Trigger the conversion when the page loads
window.addEventListener('load', () => {
  convertMarkdownToHtml();
});