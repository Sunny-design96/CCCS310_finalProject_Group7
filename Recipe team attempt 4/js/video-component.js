document.querySelector('.dismiss-button').addEventListener('click', () => {
    document.querySelector('.video-box').style.display = 'none';
});
document.getElementById('video-container').innerHTML = `
    <div class="video-box">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/GNCtaWIhdvM?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <button class="dismiss-button">X</button>
    </div>
`;
// Create the YouTube player after the API has loaded
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '100%',
        videoId: 'GNCtaWIhdvM',  // Replace with your video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

// When the player is ready, set the initial volume and add the slider event listener
function onPlayerReady(event) {
    // Set the volume to 100 (full volume)
    player.setVolume(100);

    // Handle the volume slider change
    document.getElementById('volume-slider').addEventListener('input', function(e) {
        let volume = e.target.value;
        player.setVolume(volume); // Adjust the volume of the video based on the slider value
    });
}

