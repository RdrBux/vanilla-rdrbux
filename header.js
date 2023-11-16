import gsap from 'gsap';

const letters = document.querySelectorAll('.letter');
const smallLetters = document.querySelectorAll('.smletter');
const header = document.querySelector('header');
const smallLetterContainer = document.querySelector('.small-container');

let lastScroll = 0;
const sectionHeight = 60;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 350) {
    header.style.position = 'absolute';
  } else {
    header.style.position = 'fixed';
  }

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
      const translateYsmall =
        -moveFactor * smallLetterContainer.offsetHeight + 37;

      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: translateY,
        });

        const smallLetter = smallLetters[idx];
        gsap.to(smallLetter, {
          y: translateYsmall,
        });
      });
    } else {
      pair.forEach((idx) => {
        const letter = letters[idx];
        gsap.to(letter, {
          y: 0,
        });

        const smallLetter = smallLetters[idx];
        gsap.to(smallLetter, {
          y: '150%',
        });
      });
    }
  });
});
