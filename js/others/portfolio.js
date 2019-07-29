// IF YOU WANT VIDEO PLAY ON HOVER ONLY
$('video').mouseover(function(){
  $(this).get(0).play();
}).mouseout(function(){
  $(this).get(0).currentTime = 0;
  $(this).get(0).pause();
})


// //VIDEO CAROUSEL
// // without this script, the slider doesn't start on it's own:
// !function ($) {
//   $(function(){
//     $('#homepage_slider').carousel()
//   })
// }(window.jQuery)


// // if user chooses to not autoplay the video, the button should be uncommented in html and this script will make the button work:
// var vid = document.getElementById("bgvid");
// var playButton = document.querySelector("#slider-play-button button");

// playButton.addEventListener("click", function() {
// if (vid.paused) {
//   vid.play();
// playButton.classList.remove("play-video-button");
//   playButton.classList.add("pause-video-button");
// } else {
//   vid.pause();
// playButton.classList.add("play-video-button");
//   playButton.classList.remove("pause-video-button");
// }
// });