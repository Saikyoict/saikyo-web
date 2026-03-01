/* script.js */
function switchLang(lang) {
    const jpElements = document.querySelectorAll('.jp-text, .lang-content-jp');
    const cnElements = document.querySelectorAll('.cn-text, .lang-content-cn');
    const btnJp = document.getElementById('btn-jp');
    const btnCn = document.getElementById('btn-cn');

    if (lang === 'cn') {
        jpElements.forEach(el => el.classList.add('lang-hidden'));
        cnElements.forEach(el => el.classList.remove('lang-hidden'));
        btnCn.classList.add('active');
        btnJp.classList.remove('active');
    } else {
        cnElements.forEach(el => el.classList.add('lang-hidden'));
        jpElements.forEach(el => el.classList.remove('lang-hidden'));
        btnJp.classList.add('active');
        btnCn.classList.remove('active');
    }
}