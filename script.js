// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark / Light Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.icon');
  const themeText = themeToggle.querySelector('.theme-text');

  // Load user preference from localStorage if available
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
  });

  function updateThemeButton(theme) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'מצב בהיר';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'מצב כהה';
    }
  }

  // 2. Read More / Read Less Toggle
  const readMoreBtn = document.getElementById('readMoreBtn');
  const moreAbout = document.getElementById('moreAbout');

  readMoreBtn.addEventListener('click', () => {
    const isHidden = moreAbout.classList.contains('hidden');
    if (isHidden) {
      moreAbout.classList.remove('hidden');
      readMoreBtn.textContent = 'הצג פחות';
    } else {
      moreAbout.classList.add('hidden');
      readMoreBtn.textContent = 'קרא עוד';
    }
  });

  // 3. Contact Form Submission (Client-Side Simulation)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Client-side validation
    if (!name || !email || !message) {
      showFeedback('אנא מלא את כל השדות בטופס.', 'error');
      return;
    }

    // Simulate sending message
    showFeedback(`תודה ${name}! הודעתך התקבלה בהצלחה. ניצור עמך קשר בהקדם.`, 'success');
    contactForm.reset();
  });

  function showFeedback(text, type) {
    formFeedback.textContent = text;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.classList.remove('hidden');

    // Auto-hide feedback after 5 seconds
    setTimeout(() => {
      formFeedback.classList.add('hidden');
    }, 5000);
  }
});

