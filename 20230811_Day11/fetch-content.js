// This script fetches the content from my markdown file in /content-src

fetch('content-src/content.md')
  .then(response => response.text())
  .then(markdownContent => {
    const markdownInput = document.getElementById('markdownInput');
    markdownInput.value = markdownContent;

    // Trigger the conversion immediately after loading the content
    convertMarkdownToHtml();
  })
  .catch(error => console.error('Error loading Markdown content:', error));