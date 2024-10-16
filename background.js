chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      try {
        const url = new URL(tab.url);
        const domain = url.hostname.replace('www.', '');
        if (domain === "chat.openai.com" || domain === "chatgpt.com") {
          chrome.tabs.remove(tab.id);
        }
      } catch (e) {
  //Just ignore if invalid url!
      }
    });
  });
});
