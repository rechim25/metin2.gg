// Set a timeout to hide the GIF after 5 seconds (5000 milliseconds)
setTimeout(() => {
    document.getElementById('fullscreenGif').style.display = 'none';
}, 2000);

function repositionTextPanel() {
    const img = document.getElementById('image');
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const textPanel = document.getElementById('text-panel');
    textPanel.style.top = `${imgHeight * 27 / 100}px`;
    textPanel.style.left = `${imgWidth * 25 / 100}px`
    textPanel.style.width = `${imgWidth * 53 / 100}px`
    textPanel.style.fontSize = `${imgWidth * 1.2 / 100}px`
}

window.onload = repositionTextPanel;
window.onresize = repositionTextPanel;