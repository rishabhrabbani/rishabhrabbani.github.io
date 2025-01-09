//Swiper
var swiper = new Swiper(".popular-content", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay:{
        delay: 755500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        510: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        758: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    // // Show video
    // let playButton = document.querySelector(".play-movie");
    // let video = document.querySelector(".video-container");
    // let myvideo = document.querySelector("#myvideo");
    // let closebtn = document.querySelector(".close-video");

    // playButton.onclick = () => {
    //   video.classList.add("show-video");
    //   // Auto Play when Click on Button
    //   myvideo.play();
    // }
    // closebtn.onclick = () => {
    //   video.classList.remove("show-video");
    //   // Pause on Close Video
    //   myvideo.pause();
    // }
    
// Select elements
const playButton = document.querySelector('.play-movie');
const videoContainer = document.querySelector('.video-container');
const closeButton = document.querySelector('.close-video');
const video = document.querySelector('#myvideo');

// Open the video
playButton.addEventListener('click', () => {
  videoContainer.style.display = 'flex'; // Show the video container
  video.play(); // Start playing the video
});

// Close the video
closeButton.addEventListener('click', () => {
  video.pause(); // Pause the video
  video.currentTime = 0; // Reset video to the start
  videoContainer.style.display = 'none'; // Hide the video container
});

// Search Movies

// Select play buttons and video containers
const playButtons = document.querySelectorAll('.play-movie');
const videoContainers = document.querySelectorAll('.video-container');
const closeButtons = document.querySelectorAll('.close-video');

// Handle play button click
playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const videoContainer = button.nextElementSibling; // Get the next video container
    if (videoContainer) {
      videoContainer.classList.add('active');
      const video = videoContainer.querySelector('video');
      if (video) {
        video.play(); // Start the video
      }
    }
  });
});

// Handle close button click
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const videoContainer = button.closest('.video-container');
    if (videoContainer) {
      const video = videoContainer.querySelector('video');
      if (video) {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to the beginning
      }
      videoContainer.classList.remove('active'); // Hide video container
    }
  });
});

