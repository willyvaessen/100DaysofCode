if (typeof marked === 'undefined') {
  const script = document.createElement('script');
  script.src = 'marked.js'; // Replace with the actual path to the marked library
  script.onload = function() {
    // Now the marked library is available
    console.log('marked library is now available');
    // You can use the marked library here
  };
  document.head.appendChild(script);
} else {
  // marked library is available
  console.log('marked library is available');
  // You can use the marked library here
}
