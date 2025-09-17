// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Optional: Close menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  if (
    !hamburgerNav.contains(event.target) &&
    menu.classList.contains("open")
  ) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Smooth scroll function for arrow buttons
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Initialize smooth scrolling for all navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Toggle FAQ Items
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// Optional: Close FAQ when clicking outside