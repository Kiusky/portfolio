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

  function smoothScrollTo(element, offset = 20, duration = 600) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  const servicosToggle = document.getElementById('servicosToggle');
  const projetosToggle = document.getElementById('projetosToggle');
  const servicosContent = document.getElementById('servicosContent');
  const projetosContent = document.getElementById('projetosContent');
  const servicosArrow = servicosToggle.querySelector('.arrow');
  const projetosArrow = projetosToggle.querySelector('.arrow');
  const servicosSection = document.getElementById('servicosSection');
  const projetosSection = document.getElementById('projetosSection');

  function closeAllAccordions() {
    servicosContent.classList.remove('open');
    projetosContent.classList.remove('open');
    servicosArrow.classList.remove('rotated');
    projetosArrow.classList.remove('rotated');
  }

  function toggleAccordion(content, arrow, section) {
    const isOpen = content.classList.contains('open');
    closeAllAccordions();
    if (!isOpen) {
      content.classList.add('open');
      arrow.classList.add('rotated');
      setTimeout(function() {
        smoothScrollTo(section, 30, 600);
      }, 100);
    }
  }

  servicosToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleAccordion(servicosContent, servicosArrow, servicosSection);
  });

  projetosToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleAccordion(projetosContent, projetosArrow, projetosSection);
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

  const contatarBtn = document.getElementById('contatarBtn');
  const formWrapper = document.getElementById('formWrapper');
  const contactForm = document.getElementById('contactForm');
  const formContent = document.getElementById('formContent');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = document.getElementById('submitBtn');
  const contatoBox = document.getElementById('contato');

  let isFormOpen = false;
  let scrollInterval = null;

  function scrollDuringAnimation() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }

    smoothScrollTo(contatoBox, 30, 500);

    let elapsed = 0;
    scrollInterval = setInterval(() => {
      elapsed += 50;
      if (elapsed < 0) {
        smoothScrollTo(contatoBox, 30, 300);
      } else {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    }, 50);
  }

  contatarBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    isFormOpen = !isFormOpen;
    formWrapper.classList.toggle('open', isFormOpen);
    
    if (isFormOpen) {
      contatarBtn.innerHTML = '<i class="fas fa-times"></i> Fechar';
      
      contactForm.classList.remove('hidden-form');
      formContent.style.display = 'block';
      loadingIndicator.style.display = 'none';
      successMessage.style.display = 'none';
      
      setTimeout(function() {
        scrollDuringAnimation();
      }, 50);
    } else {
      contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
      formContent.style.display = 'block';
      loadingIndicator.style.display = 'none';
      successMessage.style.display = 'none';
      contactForm.classList.remove('hidden-form');
      
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    }
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    submitBtn.disabled = true;

    contactForm.classList.add('hidden-form');
    loadingIndicator.style.display = 'block';
    successMessage.style.display = 'none';

    setTimeout(function() {
      smoothScrollTo(contatoBox, 30, 400);
    }, 100);

    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        loadingIndicator.style.display = 'none';
        successMessage.style.display = 'block';
        submitBtn.disabled = false;

        setTimeout(function() {
          smoothScrollTo(contatoBox, 20, 400);
        }, 100);

        setTimeout(() => {
          contactForm.reset();
          formWrapper.classList.remove('open');
          isFormOpen = false;
          contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
          contactForm.classList.remove('hidden-form');
          formContent.style.display = 'block';
          loadingIndicator.style.display = 'none';
          successMessage.style.display = 'none';
        }, 4000);
      } else {
        throw new Error('Erro no envio');
      }
    })
    .catch(error => {
      contactForm.classList.remove('hidden-form');
      loadingIndicator.style.display = 'none';
      formContent.style.display = 'block';
      submitBtn.disabled = false;
      successMessage.style.display = 'none';
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    });
  });

  successMessage.addEventListener('click', function() {
    this.style.display = 'none';
    formContent.style.display = 'block';
    contactForm.classList.remove('hidden-form');
    formWrapper.classList.remove('open');
    isFormOpen = false;
    contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
    
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  });

})();