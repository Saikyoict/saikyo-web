function switchLang(lang) {
    const jpTexts = document.querySelectorAll('.jp-text');
    const cnTexts = document.querySelectorAll('.cn-text');
    const btnJp = document.getElementById('btn-jp');
    const btnCn = document.getElementById('btn-cn');

    if (lang === 'cn') {
        // 显示中文，隐藏日语
        jpTexts.forEach(el => el.classList.add('hidden'));
        cnTexts.forEach(el => el.classList.remove('hidden', 'lang-hidden'));
        // 切换按钮样式
        btnCn.classList.add('text-blue-900', 'border-b-2', 'border-blue-900');
        btnCn.classList.remove('text-gray-400');
        btnJp.classList.remove('text-blue-900', 'border-b-2', 'border-blue-900');
        btnJp.classList.add('text-gray-400');
    } else {
        // 显示日语，隐藏中文
        cnTexts.forEach(el => el.classList.add('hidden'));
        jpTexts.forEach(el => el.classList.remove('hidden', 'lang-hidden'));
        // 切换按钮样式
        btnJp.classList.add('text-blue-900', 'border-b-2', 'border-blue-900');
        btnJp.classList.remove('text-gray-400');
        btnCn.classList.remove('text-blue-900', 'border-b-2', 'border-blue-900');
        btnCn.classList.add('text-gray-400');
    }
}

// 页面加载时默认为日语
window.onload = () => switchLang('jp');
