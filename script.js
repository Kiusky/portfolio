(function() {
  const toggleBtn = document.getElementById('themeToggle');
  const icon = toggleBtn.querySelector('i');
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const savedTheme = localStorage.getItem('theme');
  let initialTheme = savedTheme || getSystemTheme();
  setTheme(initialTheme);

  toggleBtn.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });

  const iframeCode = document.getElementById('iframeCode');
  const iframePages = document.getElementById('iframePages');
  const monitorScreen = document.getElementById('monitorScreen');
  let timeoutId = null;
  let isFirstVisit = true;
  let isFirstVisitComplete = false;

  function setPagesVisible(visible) {
    if (visible) {
      iframePages.classList.remove('hidden');
    } else {
      iframePages.classList.add('hidden');
    }
  }

  function loadCode() {
    iframeCode.src = iframeCode.src;
    setTimeout(function() {
      iframeCode.classList.add('loaded');
    }, 100);
  }

  function startFirstVisitTimer() {
    if (isFirstVisit) {
      timeoutId = setTimeout(function() {
        setPagesVisible(false);
        loadCode();
        isFirstVisit = false;
        isFirstVisitComplete = true;
        timeoutId = null;
      }, 50000);
    }
  }

  monitorScreen.addEventListener('mouseenter', function() {
    if (isFirstVisitComplete) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      setPagesVisible(true);
    }
  });

  monitorScreen.addEventListener('mouseleave', function() {
    if (isFirstVisitComplete) {
      setPagesVisible(false);
    }
  });

  setPagesVisible(true);
  startFirstVisitTimer();

  const servicosToggle = document.getElementById('servicosToggle');
  const projetosToggle = document.getElementById('projetosToggle');
  const servicosContent = document.getElementById('servicosContent');
  const projetosContent = document.getElementById('projetosContent');
  const servicosArrow = servicosToggle.querySelector('.arrow');
  const projetosArrow = projetosToggle.querySelector('.arrow');

  function closeAllAccordions() {
    servicosContent.classList.remove('open');
    projetosContent.classList.remove('open');
    servicosArrow.classList.remove('rotated');
    projetosArrow.classList.remove('rotated');
  }

  function toggleAccordion(content, arrow) {
    const isOpen = content.classList.contains('open');
    closeAllAccordions();
    if (!isOpen) {
      content.classList.add('open');
      arrow.classList.add('rotated');
    }
  }

  servicosToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleAccordion(servicosContent, servicosArrow);
  });

  projetosToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleAccordion(projetosContent, projetosArrow);
  });

  const diferenciais = document.querySelector('.diferenciais');
  if (diferenciais) {
    diferenciais.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      this.style.setProperty('--mouse-x', x + '%');
      this.style.setProperty('--mouse-y', y + '%');
    });
  }

  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let current = 0;
  let autoInterval;

  function goTo(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function startAuto() { stopAuto(); autoInterval = setInterval(next, 5000); }
  function stopAuto() { if (autoInterval) { clearInterval(autoInterval); autoInterval = null; } }

  dots.forEach((d, i) => d.addEventListener('click', function() {
    goTo(i);
    stopAuto();
    startAuto();
  }));

  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);
  startAuto();

})();