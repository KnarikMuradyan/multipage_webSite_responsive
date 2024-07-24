
let headingTop = 0;
let oldScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        if (index === 0) return;
        let sectionTop = section.getBoundingClientRect();
        let elemTop = sectionTop.top;
        let elemHeight = sectionTop.height;

        if (elemTop < elemHeight - 20) {
            section.style.opacity = 1;
        } else {
            section.style.opacity = 0;
        }
    });

    let heading = document.querySelector('.heading-section');
    if (heading) {
        let headingRect = heading.getBoundingClientRect();
        if (headingRect.top >= -(headingRect.height / 2)) {
            heading.style.backgroundPositionY = window.scrollY / 5 + 'px';
        }
    }
});
