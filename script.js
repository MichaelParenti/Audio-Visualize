//Declarations
var header = document.querySelector('header');
var header_img = document.getElementById("logo");

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const videoSources = [
    "media/Video Rotation/1 sound_recording_-_122737 (1080p).mp4",
    "media/Video Rotation/2 128386 (1080p).mp4",
    "media/Video Rotation/3 computer_-_109142 (1080p).mp4",
    "media/Video Rotation/4 130344 (720p).mp4",
    "media/Video Rotation/5 synthesizer_-_3239 (720p).mp4",
    "media/Video Rotation/6 sound_recording_-_122736 (1080p).mp4",
    "media/Video Rotation/7 128385 (1080p).mp4"
    // Add more video sources as needed
  ];

  const videoElement = document.getElementById('fullscreenVideo');
  let currentVideoIndex = 0;

  function loadNextVideo() {
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.play();
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  }

  // Use 'loadeddata' event to ensure the video is ready to play
  videoElement.addEventListener('loadeddata', function() {
    videoElement.play();
  });

  videoElement.addEventListener('ended', loadNextVideo);

  // Load the first video on page load
  loadNextVideo();


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
    // Navigation Animation
    setInterval (() => {
        if(window.scrollY > 50){
            header_img.style.height = '50px';
            header_img.style.width = 'auto';
            header.style.height = '53px';

        } else {
            header_img.style.height = '60px';
            header_img.style.width = 'auto'; 
            header.style.height = '62px';
        }
    }, 1);

    //Navigation Hamburger Menu
    function toggleNav() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('active');
      }
  

