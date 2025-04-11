const text = "Hai Fera Febrianti, Kiki sayaaang banget sama kamu sayang❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("mainText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

function showLove() {
  document.getElementById("popup").classList.remove("hidden");
}

function showLove() {
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("gallery").classList.add("hidden");
}

function showGallery() {
  document.getElementById("gallery").classList.remove("hidden");
  document.getElementById("popup").classList.add("hidden");
}

function hideGallery() {
  document.getElementById("gallery").classList.add("hidden");
}
