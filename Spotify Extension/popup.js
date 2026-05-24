// Grab elements
const input = document.getElementById('songInput');
const button = document.getElementById('playBtn');
const status = document.getElementById('status');

// Click button to search
button.addEventListener('click', () => {
    playSong();
});

// Also allow pressing Enter
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        playSong();
    }
});

function playSong() {
    const songName = input.value.trim();

    // Guard: nothing typed
    if (!songName) {
        status.textContent = '⚠️ Please enter a song name.';
        status.style.color = '#e74c3c';
        return;
    }

    // Build Spotify search URL
    const encoded = encodeURIComponent(songName);
    const spotifyUrl = `https://open.spotify.com/search/${encoded}`;

    // Open in a new tab
    chrome.tabs.create({ url: spotifyUrl });

    // Show confirmation
    status.textContent = `✅ Searching for "${songName}"...`;
    status.style.color = '#1DB954';

    // Clear input
    input.value = '';
}