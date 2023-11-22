import './style.css';

const lenis = new Lenis({
  lerp: 0.075,
});

/* lenis.on('scroll', (e) => {
  console.log(e);
}); */

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
