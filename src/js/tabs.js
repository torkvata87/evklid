const managerTabs = () => {
    const tabsBtnsAll = document.querySelectorAll('.tabs__btn');
    const tabContentsAll = document.querySelectorAll('.tab-content');

    tabsBtnsAll.forEach(tabsBtn => {
        tabsBtn.addEventListener('click', (event) => {
            const btn = event.currentTarget;
            const target = document.querySelector(`[data-target="${btn.dataset.path}"]`);

            // Удаляем активные классы у всех кнопок
            tabsBtnsAll.forEach(btn => btn.classList.remove('tabs__btn-active'));
            btn.classList.add('tabs__btn-active');

            // Скрываем текущий контент
            tabContentsAll.forEach(tabContent => {
                if (tabContent.classList.contains('tab-content-active')) {
                    gsap.to(tabContent, {
                        opacity: 0.5,
                        duration: 0.3,
                        onComplete: () => {
                            tabContent.classList.remove('tab-content-active');
                            tabContent.style.display = 'none';
                            showNewTab(target);
                        }
                    });
                }
            });
        });
    });

    function showNewTab(target) {
        target.style.display = 'block';
        gsap.set(target, { opacity: 0.5});
        gsap.to(target, {
            opacity: 1,
            duration: 0.3,
            onComplete: () => {
                target.classList.add('tab-content-active');
            }
        });
    }
}

managerTabs();
