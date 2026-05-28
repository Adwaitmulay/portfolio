// =============================================
// SCRIPT.JS — Portfolio Interactions
// =============================================


// ── 1. HAMBURGER MENU ────────────────────────

var hamburger = document.getElementById('hamburger');
var navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// close menu when link is clicked
var links = document.querySelectorAll('.nav-links a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
}


// ── 2. NAVBAR SHADOW ON SCROLL ───────────────

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});


// ── 3. FADE IN ANIMATION ON SCROLL ───────────

var animItems = document.querySelectorAll('.skill-card, .project-card, .stat-box, .info-card');

var observer = new IntersectionObserver(function(entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('show');
    }
  }
}, { threshold: 0.1 });

for (var j = 0; j < animItems.length; j++) {
  animItems[j].style.opacity    = '0';
  animItems[j].style.transform  = 'translateY(20px)';
  animItems[j].style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(animItems[j]);
}

var animStyle = document.createElement('style');
animStyle.textContent = '.show { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(animStyle);


// ── 4. CONTACT FORM ──────────────────────────

function sendMessage() {
  var name    = document.getElementById('c-name').value.trim();
  var email   = document.getElementById('c-email').value.trim();
  var message = document.getElementById('c-message').value.trim();
  var msg     = document.getElementById('contact-msg');

  // simple validation
  if (name === '') {
    msg.style.color   = 'red';
    msg.textContent   = 'Please enter your name.';
    return;
  }

  if (email === '' || email.indexOf('@') === -1) {
    msg.style.color = 'red';
    msg.textContent = 'Please enter a valid email.';
    return;
  }

  if (message === '') {
    msg.style.color = 'red';
    msg.textContent = 'Please enter a message.';
    return;
  }

  // success
  msg.style.color = 'green';
  msg.textContent = 'Thanks for reaching out! I will get back to you soon.';

  // clear form
  document.getElementById('c-name').value    = '';
  document.getElementById('c-email').value   = '';
  document.getElementById('c-message').value = '';
}
