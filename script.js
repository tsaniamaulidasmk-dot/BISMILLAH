/* =========================
   GALERI 56 FOTO
========================= */

const photoGrid = document.getElementById("photoGrid");

const totalPhotos = 56;

for (let i = 1; i <= totalPhotos; i++) {

    const card = document.createElement("div");

    card.className = "photo-card";

    card.innerHTML = `
        <img src="image/${i}.jpeg" alt="Foto ${i}">
    `;

    card.dataset.number = i;

    photoGrid.appendChild(card);
}


/* =========================
   LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const photoCounter = document.getElementById("photoCounter");

const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentPhoto = 1;


function showPhoto(number) {

    currentPhoto = number;

    lightboxImage.src = `image/${currentPhoto}.jpeg`;

    photoCounter.textContent =
        `${currentPhoto} / ${totalPhotos}`;

    lightbox.classList.add("active");
}


document.querySelectorAll(".photo-card").forEach(card => {

    card.addEventListener("click", () => {

        const number = Number(card.dataset.number);

        showPhoto(number);

    });

});


nextPhoto.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto > totalPhotos) {
        currentPhoto = 1;
    }

    showPhoto(currentPhoto);

});


prevPhoto.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = totalPhotos;
    }

    showPhoto(currentPhoto);

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


/* =========================
   TOMBOL KENANGAN RAHASIA
========================= */

const secretButton = document.getElementById("secretButton");
const secretMemory = document.getElementById("secretMemory");
const closeSecret = document.getElementById("closeSecret");


secretButton.addEventListener("click", () => {

    secretMemory.classList.add("active");

});


closeSecret.addEventListener("click", () => {

    secretMemory.classList.remove("active");

});


secretMemory.addEventListener("click", (event) => {

    if (event.target === secretMemory) {
        secretMemory.classList.remove("active");
    }

});


/* =========================
   TOMBOL ESCAPE
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        secretMemory.classList.remove("active");

    }

});