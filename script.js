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
