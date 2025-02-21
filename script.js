const video = document.querySelector("video");

const horizontal = document.getElementById("horizontal");
const circle = document.getElementById("circle");
const slide = document.getElementById("slide");
const carboncillo = document.getElementById("carboncillo");
const emboss = document.getElementById("emboss");

video.volume = 0.5;

horizontal.addEventListener("click", () => {
    video.pause();
    video.currentTime = 14;
});

circle.addEventListener("click", () => {
    video.currentTime = 53;
});

slide.addEventListener("click", () => {
    video.currentTime = 109;
});

carboncillo.addEventListener("click", () => {
    video.currentTime = 152;
});

emboss.addEventListener("click", () => {
    video.currentTime = 421;
});