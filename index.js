const dynamicCircle = document.getElementById('dynamicCircle');
const hoverArea = document.getElementById('hover-area');

document.addEventListener('mousemove', function (event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // Move the circle to follow the mouse
    dynamicCircle.style.top = mouseY + 'px';
    dynamicCircle.style.left = mouseX + 'px';
});

// Show the circle on hover and hide on mouse leave
hoverArea.addEventListener('mouseenter', () => {
    dynamicCircle.style.opacity = 1; // Show circle
});

hoverArea.addEventListener('mouseleave', () => {
    dynamicCircle.style.opacity = 0; // Hide circle
});


document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector('.accordion');

    accordion.addEventListener('click', (event) => {
        const header = event.target.closest('.accordion-header');
        if (header) {
            const index = Array.from(accordion.children).indexOf(header.parentElement);
            toggleAccordion(index);
        }
    });
});

function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
}
