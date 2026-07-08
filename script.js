/**
 * 跨语言核心控制系统
 * @param {string} lang - 'jp' 或 'cn'
 */
function switchLang(lang) {
    const isCn = lang === 'cn';
    
    // 1. 批量切换文本显示状态
    document.querySelectorAll('.jp-text').forEach(el => {
        if (isCn) el.classList.add('lang-hidden');
        else el.classList.remove('lang-hidden');
    });
    
    document.querySelectorAll('.cn-text').forEach(el => {
        if (isCn) el.classList.remove('lang-hidden');
        else el.classList.add('lang-hidden');
    });
    
    // 2. 精准调度顶部控制条按钮高亮样式（锁死字号与内边距，拒绝多余抖动）
    const btnJp = document.getElementById('btn-jp');
    const btnCn = document.getElementById('btn-cn');
    
    if (isCn) {
        btnJp.className = "px-4 py-1.5 text-[12px] font-bold rounded-full transition-all lang-btn-inactive";
        btnCn.className = "px-4 py-1.5 text-[12px] font-bold rounded-full transition-all lang-btn-active";
    } else {
        btnJp.className = "px-4 py-1.5 text-[12px] font-bold rounded-full transition-all lang-btn-active";
        btnCn.className = "px-4 py-1.5 text-[12px] font-bold rounded-full transition-all lang-btn-inactive";
    }
}

// 3. 页面初始化自动锚定默认语言为：日语
window.addEventListener('DOMContentLoaded', () => {
    switchLang('jp');
});
