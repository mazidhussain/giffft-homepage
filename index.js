const dynamicCircle = document.getElementById('dynamicCircle');
const hoverArea = document.getElementById('hover-area');

document.addEventListener('mousemove', function (event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    dynamicCircle.style.top = mouseY + 'px';
    dynamicCircle.style.left = mouseX + 'px';
});

hoverArea.addEventListener('mouseenter', () => {
    dynamicCircle.style.opacity = 1;
});

hoverArea.addEventListener('mouseleave', () => {
    dynamicCircle.style.opacity = 0;
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const accordionBody = accordionItem.querySelector('.accordion-body');

        if (accordionItem.classList.contains('active')) {
            accordionBody.style.maxHeight = 0;
            accordionItem.classList.remove('active');
        } else {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            accordionItem.classList.add('active');
        }
    });
});
