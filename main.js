const stalker = document.querySelector('.box');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const ease = 0.1;
const easeMove = -0.06;

const mouseMove =(e)=> {
  mouseX = e.clientX - (window.innerWidth / 2);
  mouseY = e.clientY - (window.innerHeight / 2);
}

document.addEventListener('mousemove', mouseMove);

const tick =()=> {
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;
  gsap.set(stalker, {
    x:currentX * easeMove,
    y:currentY * easeMove,
  });
  window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);