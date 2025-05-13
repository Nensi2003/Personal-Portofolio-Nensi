document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()


  // Header scroll effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
      header.style.backdropFilter = "blur(10px)"
      header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.backgroundColor = "transparent"
      header.style.backdropFilter = "none"
      header.style.boxShadow = "none"
    }
  })

  // Mobile menu 
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")
  let mobileMenuOpen = false

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuOpen = !mobileMenuOpen
    if (mobileMenuOpen) {
      mobileMenu.style.display = "block"
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>'
    } else {
      mobileMenu.style.display = "none"
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Close mobile menu when clicking
  const mobileLinks = document.querySelectorAll(".mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none"
      mobileMenuOpen = false
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    })
  })

  // Form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // send the form data to a server


      
      console.log("Form submitted:", { name, email, subject, message })
      alert("Thank you for your message! I will get back to you soon.")

      
      contactForm.reset()
    })
  }

  // Animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".section-header, .project-card, .experience-card, .skill-category, .contact-card",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Initial styles
  const elementsToAnimate = document.querySelectorAll(
    ".section-header, .project-card, .experience-card, .skill-category, .contact-card",
  )
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  
  window.addEventListener("scroll", animateOnScroll)

  
  animateOnScroll()
})