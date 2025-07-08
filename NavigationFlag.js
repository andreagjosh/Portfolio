
  document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar ul li");

  function activateMenu() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
  const sectionHeight = section.offsetHeight;
  const sectionTop = section.offsetTop - 70; // adjust for navbar height
  const sectionId = section.getAttribute("id");

  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
  navLinks.forEach(li => li.classList.remove("active"));
  const activeLink = document.querySelector('.navbar ul li a[href="#' + sectionId + '"]');
  if (activeLink) {
  activeLink.parentElement.classList.add("active");
}
}
});

  // Special case for "Home" at the very top
  if (scrollY < 200) { // adjust as needed
  navLinks.forEach(li => li.classList.remove("active"));
  navLinks[0].classList.add("active");
}
}

  window.addEventListener("scroll", activateMenu);

  // Optional: highlight on click immediately
  navLinks.forEach(li => {
  li.addEventListener("click", function() {
  navLinks.forEach(li => li.classList.remove("active"));
  this.classList.add("active");
});
});
});
