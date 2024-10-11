document.getElementById('connectAll').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: connectAllProfiles
      });
    });
  });
  
  function connectAllProfiles() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (button.innerText.includes('Connect')) {
        setTimeout(() => button.click(), Math.random() * 3000); // Random delay to avoid spam
      }
    });
  }