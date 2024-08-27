chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message_id === 'draw_attention') {
    chrome.windows.getCurrent().then(current => {
      chrome.windows.update(current.id, { drawAttention: true })
    });
  }
  return true;
});
