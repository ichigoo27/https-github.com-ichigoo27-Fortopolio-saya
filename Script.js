// Efek mengetik
const text = "Innovating the Future of Electrical Engineering...";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

// Animasi GSAP
gsap.from(".glowing-text", { opacity: 0, y: -20, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 20, duration: 1.5, delay: 0.5 });
gsap.from(".project-card", { opacity: 0, x: -30, duration: 1, stagger: 0.5 });