document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const topnavLinks = document.querySelector('.topnav-links');
    const menuIcon = document.querySelector('.menu-icon');

    // 菜单切换
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        topnavLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // 点击外部关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.topnavbar')) {
            topnavLinks.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });

    // 字体加载检测
    document.fonts.ready.then(() => {
        // 字体加载完成后执行
        document.querySelector('.topnavbar').style.visibility = 'visible';
    });

    // 窗口尺寸监听
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            topnavLinks.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });

    // 平滑滚动
    document.querySelectorAll('.topnav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });

                // 更新活动状态
                document.querySelectorAll('.topnav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});