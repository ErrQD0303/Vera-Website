"use strict";
// Replace Text In Header

const replaceMeFunction = function () {
  const checkReplace = document.querySelector(".replace-me");

  if (!checkReplace) return;

  const replace = new ReplaceMe(checkReplace, {
    animation: "animated fadeIn",
    speed: 2000,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
};

replaceMeFunction();

// User Scroll For Navbar
const userScroll = function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("border-bottom");
      navbar.classList.add("border-secondary");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("border-bottom");
      navbar.classList.remove("border-secondary");
      navbar.classList.remove("navbar-sticky");
    }
  });
};

// Video Modal
const implementVideoToPage = function () {
  const videoBtn = document.querySelector(".video-btn");
  const videoModal = document.querySelector("#videoModal");
  const video = document.querySelector("#video");
  let videoSrc;

  if (!video) return;

  videoBtn.addEventListener("click", () => {
    videoSrc = videoBtn.getAttribute("data-bs-src");
  });

  videoModal.addEventListener("shown.bs.modal", () => {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1;modestbranding=1;showInfo=0"
    );
  });

  videoModal.addEventListener("hide.bs.modal", () => {
    video.setAttribute("src", videoSrc);
  });
};

implementVideoToPage();

document.addEventListener("DOMContentLoaded", userScroll);
