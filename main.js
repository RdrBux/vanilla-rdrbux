import './style.css';

const lenis = new Lenis({
  lerp: 0.05,
});

/* lenis.on('scroll', (e) => {
  console.log(e);
}); */

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
