
// CURSOR EFFECTS ===============================
var cursor = document.querySelector('.cursor');
var cursorText = document.querySelector('.click-text');
var img = document.querySelectorAll('.clickable-img');
var textLink = document.querySelectorAll('.in-text-link');
var navBut = document.querySelectorAll('.nav-button');
var navLogo = document.querySelectorAll('.nav-logo');
var socialIcon = document.querySelectorAll('i');
var mouseX = 0;
var mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Change cursor when hovering over a clickable image
img.forEach(link => {
  // Leave image
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('click-img');
    document.querySelector('.click-text').style.display = 'none';
  });
  // Enter image
  link.addEventListener('mousemove', () => {
    cursor.classList.add('click-img');
    document.querySelector('.click-text').style.display = 'block';
  });
});

// Change cursor when hovering over an in-text link
textLink.forEach(link => {
  // Leave image
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('click-link');
  });
  // Enter image
  link.addEventListener('mousemove', () => {
    cursor.classList.add('click-link');
  });
});

// Change cursor when hovering over a nav button
navBut.forEach(link => {
  // Leave image
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('click-link');
  });
  // Enter image
  link.addEventListener('mousemove', () => {
    cursor.classList.add('click-link');
  });
});

// Change cursor when hovering over nav logo
navLogo.forEach(link => {
  // Leave image
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('click-link');
  });
  // Enter image
  link.addEventListener('mousemove', () => {
    cursor.classList.add('click-link');
  });
});

// Change cursor when hovering over a social icon
socialIcon.forEach(link => {
  // Leave image
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('click-social');
  });
  // Enter image
  link.addEventListener('mousemove', () => {
    cursor.classList.add('click-social');
  });
});


// SCROLLING EFFECTS =============================

// Smooth scroll
// Guide from: https://www.youtube.com/watch?v=PrQeeUt49f4&t=240s
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Change background
// Select all sections
var sections = document.querySelectorAll('section');
var header2 = document.querySelectorAll('h2');
var header3 = document.querySelectorAll('h3');
var links = document.querySelectorAll('.in-text-link');
var main = document.querySelector('main');
// Select paragraphs in main only
var para = main.querySelectorAll('p');
var body = document.body;

// GSAP documentation: https://gsap.com/docs/v3/
function setDarkMode() {
  gsap.to(body, { backgroundColor: "#111111" });
  gsap.to(header2, { color: "#FFFFFF" });
  gsap.to(header3, { color: "#FFFFFF" });
  gsap.to(links, { color: "#FFFFFF" });
  gsap.to(para, { color: "#FFFFFF" });
}

function setLightMode() {
  gsap.to(body, { backgroundColor: "#F7F3F0" });
  gsap.to(header2, { color: "#111111" });
  gsap.to(header3, { color: "#111111" });
  gsap.to(links, { color: "#111111" });
  gsap.to(para, { color: "#111111" });
}

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 400;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      // Scroll position is within the current section
      if (section.id === 'projects') {
        // Dark background
        setDarkMode();
      } else {
        // Revert to normal
        setLightMode();
      }
    }
  });
});

// Check for touch screen capabilities
function isTouchDevice() {
  // from: https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

function applyCustomCursor() {
  // Display custom cursor and remove default one
  cursor.style.display = 'block';
  body.style.cursor = 'none';
}

function removeCustomCursor() {
  // Disable custom cursor and revert to default
  cursor.style.display = 'none';
  body.style.cursor = 'none';
}

// Decide to show or remove custom cursor if touch device
if (isTouchDevice()) {
  removeCustomCursor();
} else {
  applyCustomCursor();
}