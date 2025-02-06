function getVhToPx() {
    const oneVhValue = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${oneVhValue}px`);
}

//使用 debounce 优化 resize 事件监听器，避免窗口快速调整大小时频繁触发函数。
function debounce(func, wait = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// 初始化一次
getVhToPx();

// 监听窗口变化后再次执行
window.addEventListener('resize', debounce(getVhToPx));
// 监听屏幕旋转
window.addEventListener("orientationchange", getVhToPx);
// 监听DOMContentLoaded事件
document.addEventListener("DOMContentLoaded", getVhToPx);