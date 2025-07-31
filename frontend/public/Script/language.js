document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.querySelector('.language-switcher');

  if (!switcher) return;

  const currentLangBtn = switcher.querySelector('.current-lang');
  const langDropdown = switcher.querySelector('.language-dropdown');
  const currentLangText = document.getElementById('current-lang-text');
  const currentLangIcon = document.getElementById('current-lang-icon');
  const allLangBtns = langDropdown.querySelectorAll('.lang-btn');

  const flagSources = {
    en: 'https://flagcdn.com/w20/gb.png',
    vn: 'https://flagcdn.com/w20/vn.png',
    jp: 'https://flagcdn.com/w20/jp.png'
  };

  const loadLanguage = async (lang) => {
    try {
      const response = await fetch(`Languages/${lang}.json`);
      const translations = await response.json();

      // Text
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });

      // Placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
          element.placeholder = translations[key];
        }
      });

      // Alt
      document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[key]) {
          element.alt = translations[key];
        }
      });

      // Update text "English / Tiếng Việt / 日本語"
      if (currentLangText) {
        let langKey = '';
        switch (lang) {
          case 'en':
            langKey = 'lang_english';
            break;
          case 'vn':
            langKey = 'lang_vietnamese';
            break;
          case 'jp':
            langKey = 'lang_japanese';
            break;
          default:
            langKey = 'lang_english';
        }
        currentLangText.textContent = translations[langKey];
      }
    } catch (error) {
      console.error(`Could not load language file: ${lang}.json`, error);
    }
  };

  currentLangBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    switcher.classList.toggle('open');
  });

  window.addEventListener('click', () => {
    switcher.classList.remove('open');
  });

  langDropdown.addEventListener('click', (event) => {
    const langBtn = event.target.closest('.lang-btn');
    if (!langBtn) return;

    const selectedLang = langBtn.getAttribute('data-lang');

    loadLanguage(selectedLang);

    if (currentLangIcon && flagSources[selectedLang]) {
      currentLangIcon.src = flagSources[selectedLang];
    }

    allLangBtns.forEach(btn => btn.classList.remove('active'));
    langBtn.classList.add('active');

    switcher.classList.remove('open');
  });

  // Load default EN
  loadLanguage('en');
  if (currentLangIcon) {
    currentLangIcon.src = flagSources['en'];
  }
  switcher.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
});
