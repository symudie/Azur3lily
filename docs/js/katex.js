document.addEventListener('DOMContentLoaded', function() {
  if (typeof renderMathInElement !== 'function') return;
  // render with default delimiters, also respect arithmatex config
  renderMathInElement(document.body, {
    // delimiters similar to common KaTeX usage
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '\\[', right: '\\]', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false}
    ],
    throwOnError: false
  });
});
