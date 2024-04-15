// CURSOR EFFECT
var cursor = document.querySelector('.cursor');
var cursorText = document.querySelector('.click-text');
var cursorScaleH1 = document.querySelectorAll('h1');
var cursorScaleH2 = document.querySelectorAll('h2');
var cursorClick = document.querySelectorAll('.clickable-img');
var mouseX = 0;
var mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {
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

cursorScaleH1.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow-large');

    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow-large');
    });
});

cursorScaleH2.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow-med');

    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow-med');
    });
});

cursorClick.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('click-cue');
        document.querySelector('.click-text').style.display = 'none';
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('click-cue');
        document.querySelector('.click-text').style.display = 'block';
    });
});