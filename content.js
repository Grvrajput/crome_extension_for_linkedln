function clickAllConnectButtons() {
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
  
  let delay = 1000 + Math.random() * 2000; // 1-3 seconds delay

  connectButtons.forEach((button, index) => {
    setTimeout(() => {
      button.click();
      console.log('Clicked Connect for:', button);
    }, delay * index);
  });
}

function createConnectButton() {
  const button = document.createElement('button');
  button.innerText = "Connect with All";
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '10px';
  button.style.backgroundColor = '#0A66C2';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  
  button.onclick = clickAllConnectButtons;

  document.body.appendChild(button);
}

window.onload = createConnectButton;