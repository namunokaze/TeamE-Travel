
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.feature-link');
  const images = document.querySelectorAll('.feature-image');

  // Set the first link and image as active by default
  if (links.length > 0) {
    links[0].classList.add('active');
  }
  if (images.length > 0) {
    images[0].classList.add('active');
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const imageToShow = link.getAttribute('data-image');

      // Remove 'active' from all links and images first
      links.forEach(l => l.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));

      // Add 'active' to the hovered link and corresponding image
      link.classList.add('active');
      document.querySelector(`.feature-image[data-image="${imageToShow}"]`).classList.add('active');
    });
  });
});