// Predefined list of words to highlight
const predefinedWords = ["hello", "world", "code"];

// Function to highlight words
function highlightWords() {
  const elements = document.querySelectorAll("body *");
  elements.forEach(element => {
    const node = element.firstChild;
    if (node !== null && node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      const replacedText = predefinedWords.reduce((acc, word) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        return acc.replace(regex, `<span style="background-color: yellow">${word}</span>`);
      }, text);
      if (replacedText !== text) {
        const newNode = document.createElement("span");
        newNode.innerHTML = replacedText;
        element.replaceChild(newNode, node);
      }
    }
  });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "highlight_words") {
    highlightWords();
  }
});
