 document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slide-images");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".images");
  const imageWidth = images[0].offsetWidth;
  let currentSlide = 0;

  // Function to update the slider's position
  function updateSlider() {
    const offset = -currentSlide * imageWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  // Function to go to the next slide
  function nextSlide() {
    currentSlide++;
    if (currentSlide === images.length) {
      currentSlide = 0; // Loop back to the first image
    }
    updateSlider();
  }

  // Function to go to the previous slide
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = images.length - 1; // Loop to the last image
    }
    updateSlider();
  }

  // Automatically advance the slider every 3 seconds
  setInterval(nextSlide, 3000);

  // Event listeners for the "Next" and "Previous" buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Initial slider update
  updateSlider();
});

// this code is for first slider----------------------------------------------------------------------------

const carousel = document.querySelector(".song-cards"),
  firstImg = carousel.querySelectorAll(".card")[0],
  arrowIcons = document.querySelectorAll(".songs-cate .slide-btn");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "prev" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// this code is for second slider----------------------------------------------------------------------------------

const carousel2 = document.querySelector(".song-cards-2"), // Update the selector for the second slider
  firstImg2 = carousel2.querySelectorAll(".card-li")[0], // Update the selector for the first image in the second slider
  arrowIcons2 = document.querySelectorAll(".songs-cate-2 .slide-btn"); // Update the selector for the arrow icons in the second slider

let isDragStart2 = false,
  isDragging2 = false,
  prevPageX2,
  prevScrollLeft2,
  positionDiff2;

const showHideIcons2 = () => {
  let scrollWidth2 = carousel2.scrollWidth - carousel2.clientWidth;
  arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
  arrowIcons2[1].style.display =
    carousel2.scrollLeft == scrollWidth2 ? "none" : "block";
};

arrowIcons2.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth2 = firstImg2.clientWidth + 14;
    carousel2.scrollLeft +=
      icon.id == "prev2" ? -firstImgWidth2 : firstImgWidth2;
    setTimeout(() => showHideIcons2(), 60);
  });
});

const autoSlide2 = () => {
  if (
    carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) >
      -1 ||
    carousel2.scrollLeft <= 0
  )
    return;

  positionDiff2 = Math.abs(positionDiff2);
  let firstImgWidth2 = firstImg2.clientWidth + 14;
  let valDifference2 = firstImgWidth2 - positionDiff2;

  if (carousel2.scrollLeft > prevScrollLeft2) {
    return (carousel2.scrollLeft +=
      positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2);
  }
  carousel2.scrollLeft -=
    positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
};

const dragStart2 = (e) => {
  isDragStart2 = true;
  prevPageX2 = e.pageX || e.touches[0].pageX;
  prevScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
  if (!isDragStart2) return;
  e.preventDefault();
  isDragging2 = true;
  carousel2.classList.add("dragging");
  positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
  carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
  showHideIcons2();
};

const dragStop2 = () => {
  isDragStart2 = false;
  carousel2.classList.remove("dragging");

  if (!isDragging2) return;
  isDragging2 = false;
  autoSlide2();
};

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);

// this code is for third slider-------------------------------------------------------------------------------------

const carousel3 = document.querySelector(".song-cards-3"), // Update the selector for the third slider
  firstImg3 = carousel3.querySelectorAll(".card3")[0], // Update the selector for the first image in the third slider
  arrowIcons3 = document.querySelectorAll(".songs-cate-3 .slide-btn"); // Update the selector for the arrow icons in the third slider

let isDragStart3 = false,
  isDragging3 = false,
  prevPageX3,
  prevScrollLeft3,
  positionDiff3;

const showHideIcons3 = () => {
  let scrollWidth3 = carousel3.scrollWidth - carousel3.clientWidth;
  arrowIcons3[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
  arrowIcons3[1].style.display =
    carousel3.scrollLeft == scrollWidth3 ? "none" : "block";
};

arrowIcons3.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth3 = firstImg3.clientWidth + 14;
    carousel3.scrollLeft +=
      icon.id == "prev3" ? -firstImgWidth3 : firstImgWidth3;
    setTimeout(() => showHideIcons3(), 60);
  });
});

const autoSlide3 = () => {
  if (
    carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) >
      -1 ||
    carousel3.scrollLeft <= 0
  )
    return;

  positionDiff3 = Math.abs(positionDiff3);
  let firstImgWidth3 = firstImg3.clientWidth + 14;
  let valDifference3 = firstImgWidth3 - positionDiff3;

  if (carousel3.scrollLeft > prevScrollLeft3) {
    return (carousel3.scrollLeft +=
      positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3);
  }
  carousel3.scrollLeft -=
    positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3;
};

const dragStart3 = (e) => {
  isDragStart3 = true;
  prevPageX3 = e.pageX || e.touches[0].pageX;
  prevScrollLeft3 = carousel3.scrollLeft;
};

const dragging3 = (e) => {
  if (!isDragStart3) return;
  e.preventDefault();
  isDragging3 = true;
  carousel3.classList.add("dragging");
  positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
  carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
  showHideIcons3();
};

const dragStop3 = () => {
  isDragStart3 = false;
  carousel3.classList.remove("dragging");

  if (!isDragging3) return;
  isDragging3 = false;
  autoSlide3();
};

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);

document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);

// music player
const playbtn = document.getElementById("play");
const music = document.querySelector("audio");
const songImg = document.querySelector(".song-name img");
const songTitle = document.querySelector(".song-artist #title");
const songArtist = document.querySelector(".song-artist #artist");
const prev = document.querySelector(" #prev4");
const next = document.querySelector("#next4");

let progress =document.getElementById("progress")
const timeDuration =document.getElementById("duration")
const progressTime =document.getElementById("current-time")
const progressDiv =document.getElementById("progressDiv")
const newSongs = [
  {
    name: "song1",
    title: "Chaleya",
    artist: "Arijit",
    img: "img1",
  },
  {
    name: "song2",
    title: "Heeriye",
    artist: "Arijit Singh",
    img: "img2",
  },
  {
    name: "song3",
    title: "Not Ramaiya vastaviya",
    artist: "Vishal Shekhar",
    img: "img3",
  },
  {
    name: "song4",
    title: "Zinda Banda",
    artist: "Anirudh & Nayanthara",
    img: "img4",
  },
  {
    name: "song5",
    title: "Laado",
    artist: "MC Square",
    img: "img5",
  },
  {
    name: "song6",
    title: "Kya Loge Tum",
    artist: "B-Parak",
    img: "img6",
  },
  {
    name: "song7",
    title: "Gone Girl",
    artist: "Badsha",
    img: "img7",
  },
  {
    name: "song8",
    title: "what Jhumaka",
    artist: "Arijit & Jonita",
    img: "img8",
  },
  {
    name: "song9",
    title: "Stay",
    artist: "Justin Beiber",
    img: "img9",
  },
  {
    name: "song10",
    title: "Daspacito",
    artist: "Luis Fonsi & DY",
    img: "img10",
  },
  {
    name: "song11",
    title: "2002",
    artist: "Anne Marie",
    img: "img11",
  },
  {
    name: "song12",
    title: "Taki Taki",
    artist: "Dj Snake, Selena",
    img: "img12",
  },
  {
    name: "song13",
    title: "Blindings Lights",
    artist: "The Weekend",
    img: "img13",
  },
  {
    name: "song14",
    title: "We dont Talk Anymore",
    artist: "Charlie & Selena",
    img: "img14",
  },
  {
    name: "song15",
    title: "What Do You Mean",
    artist: "Justin Beiber",
    img: "img15",
  },
  {
    name: "song16",
    title: "Attention",
    artist: "Charlie Puth",
    img: "img16",
  },
  {
    name: "song17",
    title: "Kuley Kuley",
    artist: "Honey Singh",
    img: "img17",
  },
  {
    name: "song18",
    title: "Brown Rang",
    artist: "Honey Singh ",
    img: "img18",
  },
  {
    name: "song19",
    title: "Makhna",
    artist: "Honey Singh",
    img: "img19",
  },
  {
    name: "song20",
    title: "Billo Tu Agg",
    artist: "Honey Singh",
    img: "img20",
  },
  {
    name: "song21",
    title: "Paris Ka Trip",
    artist: "Honey Singh",
    img: "img21",
  },
  {
    name: "song22",
    title: "Blue Eyes",
    artist: "Honey Singh",
    img: "img22",
  },
  {
    name: "song23",
    title: "Desi Kalakaar",
    artist: "Honey Singh",
    img: "img23",
  },
  {
    name: "song24",
    title: "First Kiss",
    artist: "Honey Singh",
    img: "img24",
  },
];

let isPlaying = false;

const musicPause = () => {
  isPlaying = false;
  music.pause();
  playbtn.classList.replace("fa-pause", "fa-play");
};
const musicPlay = () => {
  isPlaying = true;
  music.play();
  playbtn.classList.replace("fa-play", "fa-pause");
};

playbtn.addEventListener("click", () => {
  if (isPlaying) {
    musicPause();
  } else {
    musicPlay();
  }
});

const loadSongs = (newSongs) => {
  songTitle.textContent = newSongs.title;
  songArtist.textContent = newSongs.artist;
  music.src = "Songs/" + newSongs.name + ".mp3";
  songImg.src = "images/" + newSongs.img + ".jpg";
};

songIndex = 0;
const nextSong = () => {
  if (songIndex == newSongs.length) {
    songIndex = 0;
    loadSongs(newSongs[songIndex]);
    musicPlay();
  } else {
    songIndex++;
    loadSongs(newSongs[songIndex]);
    musicPlay();
  }
};

const prevSong = () => {
  if (songIndex == 0) {
    songIndex = newSongs.length;
    loadSongs(newSongs[songIndex]);
    musicPlay();
  } else {
    songIndex--;
    loadSongs(newSongs[songIndex]);
    musicPlay();
  }
};

music.addEventListener("timeupdate", (eve) =>{
  const {currentTime, duration} = eve.srcElement;
  let progresstime = (currentTime / duration) * 100;
  console.log(progresstime);
  progress.style.width= `${progresstime}%`;

  let min_duration =Math.floor(duration / 60);
  let sec_duration =Math.floor(duration % 60) ;
  let tot_duration =`${min_duration}:${sec_duration}`;
  if(duration){
    timeDuration.textContent =`${tot_duration}`
  }

  let min_currentTime =Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime%60);
  if (sec_currentTime < 10){
    sec_currentTime=`0${sec_currentTime}`;
  }
  let tot_currentTIme =`${min_currentTime}:${sec_currentTime}`;
  progressTime.textContent = `${tot_currentTIme}`;

});

progressDiv.addEventListener("click", (eve)=>{
  const {duration}=music;
  let move_progress =(eve.offsetX / eve.srcElement.clientWidth)*duration;
  music.currentTime= move_progress;
})

music.addEventListener("ended", nextSong);
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// Get the volume input element and the audio element
const volumeSlider = document.getElementById("volume");
const audioElement = music// Replace with your audio element ID

// Event listener for volume changes
volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    audioElement.volume = volume;
});


// Assuming songIndex is initialized correctly

// Add an event listener to each li card to detect clicks
for (let i = 1; i <= newSongs.length; i++) {
  const li = document.getElementById(`li${i}`);
  if (li) {
    li.addEventListener("click", () => {
      // Update the songIndex variable
      songIndex = i - 1; // Subtract 1 to convert to 0-based index

      // Load and play the corresponding song from newSongs array
      loadSongs(newSongs[songIndex]);
      musicPlay();
    });
  }
}
 
// login box
$(document).ready(function () {
  $(".login-div").css("visibility","visible");
  $(".fa-times").click(function(){
    $(".login-div").hide();
  });
  $(".login-box").click(function(){
    $(".login-div").show();
  });
});