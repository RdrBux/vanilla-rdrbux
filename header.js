import gsap from 'gsap';

const letters = document.querySelectorAll('.letter');
const smallLetters = document.querySelectorAll('.smletter');
const header = document.querySelector('header');
const smallLetterContainer = document.querySelector('.small-container');
const heroText = document.querySelector('.hero-text');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav li');

const sectionHeight = 60;
console.log(letters[0]);

window.addEventListener('load', init);

function init() {
  scroll(0, -1);

  const startOrder = [
    [letters[2], letters[3]],
    [letters[1], letters[4]],
    [letters[0], letters[5]],
  ];

  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out',
    },
  });

  tl.from(header, {
    autoAlpha: 0,
  })
    .from(startOrder[0], {
      y: '120%',
      duration: 2,
    })
    .from(
      startOrder[1],
      {
        y: '120%',
        duration: 2,
      },
      '<0.2'
    )
    .from(
      startOrder[2],
      {
        y: '120%',
        duration: 2,
      },
      '<0.4'
    )
    .from(
      heroText,
      {
        autoAlpha: 0,
        y: '20%',
        duration: 3,
      },
      1
    )
    .from(
      nav,
      {
        autoAlpha: 0,
        scaleX: 0,
        duration: 0.5,
      },
      1.5
    )
    .from(
      navItems,
      {
        opacity: 0,
        duration: 2,
        stagger: 0.2,
      },
      1.7
    );
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const orderPairs = [
    [2, 3],
    [1, 4],
    [0, 5],
  ];

  if (scrollY > 350) {
    header.style.position = 'absolute';
  } else {
    header.style.position = 'fixed';
  }

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
