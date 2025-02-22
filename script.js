const video = document.querySelector("video");
const audio = document.querySelector("audio");

const title = document.querySelector('.webTitle');
const logo = document.getElementById("logo-main");

const horizontal = document.getElementById("horizontal");
const circle = document.getElementById("circle");
const slide = document.getElementById("slide");
const carboncillo = document.getElementById("carboncillo");
const emboss = document.getElementById("emboss");


video.volume = 0.5;

title.addEventListener("click", () => {
    //eliminar descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    descripcionEfecto.style.visibility="hidden";
    efectoTitulo.innerHTML="";
    efectoDescripcion.innerHTML="";
});

logo.addEventListener("click", () => {
    //eliminar descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');

    audio.play();
    
    descripcionEfecto.style.visibility="hidden";
    efectoTitulo.innerHTML="";
    efectoDescripcion.innerHTML="";
});


horizontal.addEventListener("click", () => {
    video.pause();
    video.currentTime = 14;

    //añadir descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    efectoTitulo.innerHTML="Horizontal Barn Door Wipe";
    efectoDescripcion.innerHTML="Este filtro se encarga de realizar doble barrido, por la parte superior e inferior. Haciendo que la video se vaya cubriendo con la nueva secuencia de video";
    descripcionEfecto.style.visibility="visible";
});

circle.addEventListener("click", () => {
    video.currentTime = 53;
    //añadir descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    efectoTitulo.innerHTML="Circle Wipe";
    efectoDescripcion.innerHTML="Este efecto de transición crea un circulo del exterior al interior para realizar el corte de una secuencia a otra.";
    descripcionEfecto.style.visibility="visible";
});

slide.addEventListener("click", () => {
    video.currentTime = 109;
    //añadir descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    efectoTitulo.innerHTML="Slide Down";
    efectoDescripcion.innerHTML="La transición slide down hace que el clip siguiente aparezca en la parte superior de nuestro video y se mueva hacia abajo hasta visualizarse al 100%";
    descripcionEfecto.style.visibility="visible";
});

carboncillo.addEventListener("click", () => {
    video.currentTime = 152;
    //añadir descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    efectoTitulo.innerHTML="Carboncillo";
    efectoDescripcion.innerHTML="EL nombre ya nos dice mucho. El efecto carboncillo edita la imagen del video para que parezca un dibujo a carboncillo en blanco y negro.";
    descripcionEfecto.style.visibility="visible";
});

emboss.addEventListener("click", () => {
    video.currentTime = 421;
    //añadir descripcion
    let descripcionEfecto = document.querySelector('.descripcionEfecto');
    let efectoTitulo = document.querySelector('.efecto-titulo');
    let efectoDescripcion = document.querySelector('.efecto-descripcion');
    
    efectoTitulo.innerHTML="Emboss";
    efectoDescripcion.innerHTML="Emboss es un efecto de edición de video, no transcicón. En este caso cogemos el video y lo transformamos de tal que forma que parecería que es de papel o esta grabado en metal.";
    descripcionEfecto.style.visibility="visible";
});