import gsap from 'gsap';

const letters = document.querySelectorAll('.letter');
const header = document.querySelector('header');

let lastScroll = 0;
const sectionHeight = 60;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const orderPairs = [
    [2, 3],
    [1, 4],
    [0, 5],
  ];
  orderPairs.forEach((pair, orderIndex) => {
    const startScroll = sectionHeight * orderIndex;

    if (scrollY > startScroll) {
      const moveFactor = Math.min(1, (scrollY - startScroll) / sectionHeight);

      const translateY = -moveFactor * header.offsetHeight - 20;

      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: translateY,
          zIndex: 1 - moveFactor,
        });
      });
    } else {
      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: 0,
          zIndex: 1,
        });
      });
    }
  });
});
