// Set a timeout to hide the GIF after 5 seconds (5000 milliseconds)
setTimeout(() => {
    document.getElementById('fullscreenGif').style.display = 'none';
}, 2000);

function repositionTextPanel() {
    const img = document.getElementById('image');
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const textPanel = document.getElementById('text-panel');
    textPanel.style.top = `${imgHeight * 32 / 100}px`;
    textPanel.style.left = `${imgWidth * 35 / 100}px`
    textPanel.style.maxWidth = `${imgWidth * 25 / 100}px`
}

window.onload = repositionTextPanel;
window.onresize = repositionTextPanel;