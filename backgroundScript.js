// Predefined list of words to highlight
// const predefinedWords = ["hello", "world", "code"];

// Function to send message to content script
function sendMessageToContentScript(tabId, message) {
  chrome.tabs.sendMessage(tabId, { message });
}

// Execute when the extension icon is clicked
chrome.browserAction.onClicked.addListener(tab => {
  sendMessageToContentScript(tab.id, "highlight_words");
});
