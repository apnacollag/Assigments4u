const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Show the navigation menu when the bar is clicked
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// Hide the navigation menu when the close button is clicked
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Additional JS to handle hover event (optional)
const banners = document.querySelectorAll('#sm-banner .banner-box, #sm-banner .banner-box2');

// Log when a banner is hovered (for example purposes)
banners.forEach(banner => {
  banner.addEventListener('mouseenter', () => {
    console.log('Banner hovered');
  });
  banner.addEventListener('mouseleave', () => {
    console.log('Banner unhovered');
  });
});
