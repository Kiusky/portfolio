(function() {

  function createCircuitDividerTop() {

    if (document.querySelector('.circuit-divider-top')) return;
    
    const container = document.querySelector('.container');
    if (!container) return;
    
    const divider = document.createElement('div');
    divider.className = 'circuit-divider circuit-divider-top';
    divider.innerHTML = `
      <svg class="circuit-svg" viewBox="0 0 1200 50" preserveAspectRatio="none">
        <path class="circuit-line" d="M 0 25 L 80 25 L 80 15 L 160 15 L 160 35 L 240 35 L 240 15 L 320 15 L 320 25 L 400 25"></path>
        <path class="circuit-line" d="M 480 25 L 560 25 L 560 15 L 640 15 L 640 35 L 720 35 L 720 15 L 800 15 L 800 25 L 880 25"></path>
        <path class="circuit-line" d="M 960 25 L 1040 25 L 1040 15 L 1120 15 L 1120 35 L 1200 35"></path>
        <path class="circuit-line" d="M 400 25 L 480 25"></path>
        <path class="circuit-line" d="M 880 25 L 960 25"></path>
        <path class="circuit-line" d="M 80 25 L 80 40"></path>
        <path class="circuit-line" d="M 240 35 L 240 40"></path>
        <path class="circuit-line" d="M 400 25 L 400 40"></path>
        <path class="circuit-line" d="M 560 25 L 560 40"></path>
        <path class="circuit-line" d="M 720 35 L 720 40"></path>
        <path class="circuit-line" d="M 880 25 L 880 40"></path>
        <path class="circuit-line" d="M 1040 25 L 1040 40"></path>
        <path class="circuit-line-flow delay-1" d="M 0 25 L 80 25 L 80 15 L 160 15 L 160 35 L 240 35 L 240 15 L 320 15 L 320 25 L 400 25"></path>
        <path class="circuit-line-flow fast delay-2" d="M 400 25 L 480 25 L 480 25 L 560 25 L 560 15 L 640 15 L 640 35 L 720 35 L 720 15 L 800 15 L 800 25 L 880 25"></path>
        <path class="circuit-line-flow slow delay-3" d="M 880 25 L 960 25 L 960 25 L 1040 25 L 1040 15 L 1120 15 L 1120 35 L 1200 35"></path>
        <path class="circuit-line-flow delay-4" d="M 80 25 L 80 40"></path>
        <path class="circuit-line-flow fast delay-5" d="M 240 35 L 240 40"></path>
        <path class="circuit-line-flow delay-1" d="M 400 25 L 400 40"></path>
        <path class="circuit-line-flow slow delay-2" d="M 560 25 L 560 40"></path>
        <path class="circuit-line-flow delay-3" d="M 720 35 L 720 40"></path>
        <path class="circuit-line-flow fast delay-4" d="M 880 25 L 880 40"></path>
        <path class="circuit-line-flow delay-5" d="M 1040 25 L 1040 40"></path>
        <circle class="circuit-node active" cx="80" cy="25" r="3.5"></circle>
        <circle class="circuit-node pulse-slow" cx="160" cy="15" r="3"></circle>
        <circle class="circuit-node pulse-fast" cx="240" cy="35" r="3.5"></circle>
        <circle class="circuit-node" cx="320" cy="15" r="3"></circle>
        <circle class="circuit-node active" cx="400" cy="25" r="3.5"></circle>
        <circle class="circuit-node pulse-slow" cx="560" cy="25" r="3"></circle>
        <circle class="circuit-node pulse-fast" cx="640" cy="15" r="3.5"></circle>
        <circle class="circuit-node" cx="720" cy="35" r="3"></circle>
        <circle class="circuit-node active" cx="800" cy="15" r="3.5"></circle>
        <circle class="circuit-node" cx="880" cy="25" r="3"></circle>
        <circle class="circuit-node pulse-slow" cx="1040" cy="25" r="3.5"></circle>
        <circle class="circuit-node pulse-fast" cx="1120" cy="15" r="3"></circle>
        <rect class="circuit-chip active" x="125" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip pulse-slow" x="305" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip pulse-fast" x="605" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip active" x="785" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip" x="1085" y="10" width="12" height="6"></rect>
      </svg>
    `;

    container.insertBefore(divider, container.firstChild);
  }

  function createCircuitDividerBottom() {

    if (document.querySelector('.circuit-divider-bottom')) return;
    
    const container = document.querySelector('.container');
    if (!container) return;
    
    const divider = document.createElement('div');
    divider.className = 'circuit-divider circuit-divider-bottom';
    divider.innerHTML = `
      <svg class="circuit-svg" viewBox="0 0 1200 50" preserveAspectRatio="none">
        <path class="circuit-line" d="M 0 25 L 100 25 L 100 15 L 180 15 L 180 35 L 260 35 L 260 15 L 340 15 L 340 25 L 440 25"></path>
        <path class="circuit-line" d="M 520 25 L 600 25 L 600 15 L 680 15 L 680 35 L 760 35 L 760 15 L 840 15 L 840 25 L 940 25"></path>
        <path class="circuit-line" d="M 1020 25 L 1100 25 L 1100 15 L 1180 15 L 1180 35 L 1200 35"></path>
        <path class="circuit-line" d="M 440 25 L 520 25"></path>
        <path class="circuit-line" d="M 940 25 L 1020 25"></path>
        <path class="circuit-line" d="M 100 25 L 100 40"></path>
        <path class="circuit-line" d="M 260 35 L 260 40"></path>
        <path class="circuit-line" d="M 440 25 L 440 40"></path>
        <path class="circuit-line" d="M 600 25 L 600 40"></path>
        <path class="circuit-line" d="M 760 35 L 760 40"></path>
        <path class="circuit-line" d="M 940 25 L 940 40"></path>
        <path class="circuit-line" d="M 1100 25 L 1100 40"></path>
        <path class="circuit-line-flow delay-2" d="M 0 25 L 100 25 L 100 15 L 180 15 L 180 35 L 260 35 L 260 15 L 340 15 L 340 25 L 440 25"></path>
        <path class="circuit-line-flow slow delay-4" d="M 440 25 L 520 25 L 520 25 L 600 25 L 600 15 L 680 15 L 680 35 L 760 35 L 760 15 L 840 15 L 840 25 L 940 25"></path>
        <path class="circuit-line-flow fast delay-1" d="M 940 25 L 1020 25 L 1020 25 L 1100 25 L 1100 15 L 1180 15 L 1180 35 L 1200 35"></path>
        <path class="circuit-line-flow delay-3" d="M 100 25 L 100 40"></path>
        <path class="circuit-line-flow fast delay-5" d="M 260 35 L 260 40"></path>
        <path class="circuit-line-flow delay-1" d="M 440 25 L 440 40"></path>
        <path class="circuit-line-flow slow delay-2" d="M 600 25 L 600 40"></path>
        <path class="circuit-line-flow delay-4" d="M 760 35 L 760 40"></path>
        <path class="circuit-line-flow fast delay-3" d="M 940 25 L 940 40"></path>
        <path class="circuit-line-flow delay-5" d="M 1100 25 L 1100 40"></path>
        <circle class="circuit-node pulse-fast" cx="100" cy="25" r="3.5"></circle>
        <circle class="circuit-node" cx="180" cy="15" r="3"></circle>
        <circle class="circuit-node active" cx="260" cy="35" r="3.5"></circle>
        <circle class="circuit-node pulse-slow" cx="340" cy="15" r="3"></circle>
        <circle class="circuit-node" cx="440" cy="25" r="3.5"></circle>
        <circle class="circuit-node active" cx="600" cy="25" r="3"></circle>
        <circle class="circuit-node" cx="680" cy="15" r="3.5"></circle>
        <circle class="circuit-node pulse-fast" cx="760" cy="35" r="3"></circle>
        <circle class="circuit-node pulse-slow" cx="840" cy="15" r="3.5"></circle>
        <circle class="circuit-node" cx="940" cy="25" r="3"></circle>
        <circle class="circuit-node active" cx="1100" cy="25" r="3.5"></circle>
        <circle class="circuit-node" cx="1180" cy="15" r="3"></circle>
        <rect class="circuit-chip" x="145" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip active" x="325" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip pulse-fast" x="645" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip pulse-slow" x="825" y="10" width="12" height="6"></rect>
        <rect class="circuit-chip active" x="1145" y="10" width="12" height="6"></rect>
      </svg>
    `;

    container.appendChild(divider);
  }

  function createHeroImage() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    if (heroSection.querySelector('.hero-image')) return;

    const heroImageDiv = document.createElement('div');
    heroImageDiv.className = 'hero-image';
    heroImageDiv.innerHTML = `
      <div class="monitor-wrapper">
        <div class="monitor">
          <div class="monitor-screen" id="monitorScreen">
            <div class="iframe-container">
              <iframe src="html/code.html" class="iframe-code" id="iframeCode" scrolling="no" loading="lazy"></iframe>
              <iframe src="html/pages.html" class="iframe-pages hidden" id="iframePages" scrolling="no" loading="lazy"></iframe>
            </div>
          </div>
          <div class="monitor-led"></div>
          <div class="monitor-buttons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="monitor-stand"></div>
        <div class="monitor-base"></div>
      </div>
    `;

    heroSection.appendChild(heroImageDiv);
  }

  function createContatoSection() {
    if (document.getElementById('contato')) return;

    const contatoBox = document.createElement('div');
    contatoBox.className = 'contato-box';
    contatoBox.id = 'contato';
    contatoBox.innerHTML = `
      <div>
        <h2>Vamos construir algo incrível?</h2>
      </div>
      <div class="btn-group">
        <button class="btn-branco" id="contatarBtn">
          <i class="fas fa-paper-plane"></i> Contatar
        </button>
      </div>
      
      <div class="form-wrapper" id="formWrapper">
        <form id="contactForm" action="https://formspree.io/f/xovlqjyv" method="POST">
          <div id="formContent">
            <label>
              <span>Seu e-mail:</span>
              <input type="email" name="email" placeholder="exemplo@email.com" required>
            </label>
            
            <label>
              <span>Sua mensagem:</span>
              <textarea name="message" placeholder="Escreva sua mensagem aqui..." required></textarea>
            </label>
            
            <button type="submit" id="submitBtn">Enviar Mensagem</button>
          </div>
          
          <div id="loadingIndicator">
            <p>Enviando mensagem...</p>
          </div>
        </form>
        
        <div id="successMessage">
          <h3>
            <i class="fa-solid fa-check fa-fade" style="color: rgb(5, 189, 133);"></i>
            Mensagem enviada com sucesso!
          </h3>
          <p>Obrigado pelo seu contato. Responderemos em breve.</p>
        </div>
      </div>
    `;

    const projetosSection = document.getElementById('projetosSection');
    if (projetosSection && projetosSection.parentNode) {
      projetosSection.parentNode.insertBefore(contatoBox, projetosSection.nextSibling);
    } else {
      const footer = document.querySelector('footer');
      if (footer && footer.parentNode) {
        footer.parentNode.insertBefore(contatoBox, footer);
      }
    }
  }

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

  // Accordion
  function smoothScrollTo(element, offset = 20, duration = 600) {
    if (!element) return;
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
  const servicosArrow = servicosToggle ? servicosToggle.querySelector('.arrow') : null;
  const projetosArrow = projetosToggle ? projetosToggle.querySelector('.arrow') : null;
  const servicosSection = document.getElementById('servicosSection');
  const projetosSection = document.getElementById('projetosSection');

  function closeAllAccordions() {
    if (servicosContent) servicosContent.classList.remove('open');
    if (projetosContent) projetosContent.classList.remove('open');
    if (servicosArrow) servicosArrow.classList.remove('rotated');
    if (projetosArrow) projetosArrow.classList.remove('rotated');
  }

  function toggleAccordion(content, arrow, section) {
    if (!content) return;
    const isOpen = content.classList.contains('open');
    closeAllAccordions();
    if (!isOpen) {
      content.classList.add('open');
      if (arrow) arrow.classList.add('rotated');
      setTimeout(function() {
        smoothScrollTo(section, 30, 600);
      }, 100);
    }
  }

  if (servicosToggle) {
    servicosToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleAccordion(servicosContent, servicosArrow, servicosSection);
    });
  }

  if (projetosToggle) {
    projetosToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleAccordion(projetosContent, projetosArrow, projetosSection);
    });
  }

  // Diferenciais
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

  // Carousel
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

  if (dots.length > 0) {
    dots.forEach((d, i) => d.addEventListener('click', function() {
      goTo(i);
      stopAuto();
      startAuto();
    }));
  }

  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
  }
  startAuto();

  function initializeMonitorInteractions() {
    const iframeCode = document.getElementById('iframeCode');
    const iframePages = document.getElementById('iframePages');
    const monitorScreen = document.getElementById('monitorScreen');
    
    if (!iframeCode || !iframePages || !monitorScreen) return;
    
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
  }

  function initializeContatoInteractions() {
    const contatarBtn = document.getElementById('contatarBtn');
    const formWrapper = document.getElementById('formWrapper');
    const contactForm = document.getElementById('contactForm');
    const formContent = document.getElementById('formContent');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    const contatoBox = document.getElementById('contato');

    if (!contatarBtn || !formWrapper || !contactForm) return;

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
        
        if (contactForm) contactForm.classList.remove('hidden-form');
        if (formContent) formContent.style.display = 'block';
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (successMessage) successMessage.style.display = 'none';
        
        setTimeout(function() {
          scrollDuringAnimation();
        }, 50);
      } else {
        contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
        if (formContent) formContent.style.display = 'block';
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (successMessage) successMessage.style.display = 'none';
        if (contactForm) contactForm.classList.remove('hidden-form');
        
        if (scrollInterval) {
          clearInterval(scrollInterval);
          scrollInterval = null;
        }
      }
    });

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (submitBtn) submitBtn.disabled = true;

        contactForm.classList.add('hidden-form');
        if (loadingIndicator) loadingIndicator.style.display = 'block';
        if (successMessage) successMessage.style.display = 'none';

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
            if (loadingIndicator) loadingIndicator.style.display = 'none';
            if (successMessage) successMessage.style.display = 'block';
            if (submitBtn) submitBtn.disabled = false;

            setTimeout(function() {
              smoothScrollTo(contatoBox, 20, 400);
            }, 100);

            setTimeout(() => {
              contactForm.reset();
              formWrapper.classList.remove('open');
              isFormOpen = false;
              contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
              contactForm.classList.remove('hidden-form');
              if (formContent) formContent.style.display = 'block';
              if (loadingIndicator) loadingIndicator.style.display = 'none';
              if (successMessage) successMessage.style.display = 'none';
            }, 4000);
          } else {
            throw new Error('Erro no envio');
          }
        })
        .catch(error => {
          contactForm.classList.remove('hidden-form');
          if (loadingIndicator) loadingIndicator.style.display = 'none';
          if (formContent) formContent.style.display = 'block';
          if (submitBtn) submitBtn.disabled = false;
          if (successMessage) successMessage.style.display = 'none';
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        });
      });
    }

    if (successMessage) {
      successMessage.addEventListener('click', function() {
        this.style.display = 'none';
        if (formContent) formContent.style.display = 'block';
        if (contactForm) contactForm.classList.remove('hidden-form');
        formWrapper.classList.remove('open');
        isFormOpen = false;
        contatarBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Contatar';
        
        if (scrollInterval) {
          clearInterval(scrollInterval);
          scrollInterval = null;
        }
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {

    createCircuitDividerTop();
    createCircuitDividerBottom();
    createHeroImage();
    createContatoSection();
    
    initializeMonitorInteractions();
    initializeContatoInteractions();
  });

})();
