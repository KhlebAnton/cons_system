const companyContent = document.querySelectorAll('.products-company__content');
const tabs = document.querySelectorAll('.products-company__tab[data-tab]');
const keyTab = document.querySelector('.products-company__tab[data-product="key"]');

// Функция для активации таба
function activateTab(tabName) {
  // Скрыть все контенты
  companyContent.forEach(content => {
    content.classList.remove('is-open');
  });
  
  // Показать выбранный контент
  const activeContent = document.querySelector(`.products-company__content[data-tab="${tabName}"]`);
  if (activeContent) {
    activeContent.classList.add('is-open');
  }
  
  // Обновить активные табы в верхней панели
  tabs.forEach(tab => {
    tab.classList.remove('is-active');
    if (tab.dataset.tab === tabName) {
      tab.classList.add('is-active');
    }
  });
  
  // Обновить таб "Под ключ"
  if (keyTab) {
    keyTab.classList.remove('is-active');
    if (tabName === 'key') {
      keyTab.classList.add('is-active');
    }
  }
  
  // Прокрутить к выбранному табу (для мобильной версии)
  if (window.innerWidth <= 1250) {
    const contentTop = activeContent?.querySelector('.products-company__content-top');
    if (contentTop) {
      contentTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Обработчики для верхних табов (ПК версия)
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

// Обработчик для таба "Под ключ" (ПК версия)
if (keyTab) {
  keyTab.addEventListener('click', () => {
    activateTab('key');
  });
}

// Обработчики для мобильных табов
companyContent.forEach(content => {
  const contentTop = content.querySelector('.products-company__content-top');
  
  if (contentTop) {
    contentTop.addEventListener('click', () => {
      const tabName = content.dataset.tab;
      
      if (!content.classList.contains('is-open')) {
        activateTab(tabName);
      } else {
        content.classList.remove('is-open');
      }
    });
  }
});

// Активируем первый таб по умолчанию
activateTab('first');