const openPanel = (item, panel) => {
    item.classList.add('active');
    gsap.to(panel, {
        duration: 0.7,
        maxHeight: panel.scrollHeight + 'px',
        opacity: 1,
        ease: 'power2.out'
    });
}

const closePanel = (item, panel) => {
    item.classList.remove('active');
    gsap.to(panel, {
        duration: 0.7,
        maxHeight: '0px',
        opacity: 0,
        ease: 'power2.in'
    });
}

const managerIcon = () => {
    const btnsControl = document.querySelectorAll(".accordion__control");
    btnsControl.forEach(btn => {
        btn.addEventListener('click', (event) => {
            btnsControl.forEach(btn => btn.classList.remove("control-active"));
            event.currentTarget.classList.add("control-active");
        })
    })
}

const initAccordion = () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion__control');
        const panel = item.querySelector('.accordion__panel');

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            if (isOpen) {
                closePanel(item, panel);
            } else {
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        const otherPanel = otherItem.querySelector('.accordion__panel');
                        closePanel(otherItem, otherPanel);
                    }
                });
                openPanel(item, panel);
            }
        });
    });
}

initAccordion();
managerIcon();