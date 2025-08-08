   //header script

//    const header = document.querySelector('.header');
//    const hamburgerMenu = document.querySelector('.hamburger-menu');
//    hamburgerMenu.addEventListener('click', () => {
//    header.classList.toggle('nav-open');
//    });

     // Select all the necessary elements
  const header = document.querySelector('.header');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelectorAll('.nav a');

  // Logic to toggle the menu with the hamburger button
  hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  // NEW: Logic to close the menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // If the menu is open, remove the 'nav-open' class to close it
      if (header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
      }
    });
  });

   //header script fin

   //Sliders Script

   document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.custom-slide');
    const prevBtn = document.querySelector('.custom-prev');
    const nextBtn = document.querySelector('.custom-next');
    const dotsContainer = document.querySelector('.custom-dots');

    if (slides.length === 0) {
        console.error("No slides with the class 'custom-slide' found.");
        return;
    }

    let currentIndex = 0;
    let autoSlideInterval;
    const slideIntervalTime = 3000; // Time in ms (5 seconds)
    const dots = [];

    // --- INITIALIZATION ---

    function init() {
        // Find the initially active slide
        slides.forEach((slide, index) => {
            if (slide.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        createDots();
        updateActiveElements();
        startAutoSlide();
    }


    // --- FUNCTIONS ---

    // Generate the dots based on the number of slides
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('custom-dot');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dotsContainer.appendChild(dot);
            dots.push(dot);

            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
        });
    }

    // Update the 'active' class on the correct slide and dot
    function updateActiveElements() {
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to a specific slide index
    function goToSlide(index) {
        currentIndex = index;
        updateActiveElements();
    }

    // Show the next slide
    function showNextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    }

    // Show the previous slide
    function showPrevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    }

    // Auto-sliding functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }


    // --- EVENT LISTENERS ---

    nextBtn.addEventListener('click', () => {
        showNextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        showPrevSlide();
        resetAutoSlide();
    });
    
    // Optional: Pause auto-slide when the mouse is over the slider
    document.querySelector('.custom-slider').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.custom-slider').addEventListener('mouseleave', startAutoSlide);

    // Start the slider
    init();

});

//Sliders Script FIN


//header transparency with scroll script

// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Find the header element using its class name
    const header = document.querySelector('.header');

    // Make sure the header element exists before trying to use it
    if (!header) {
        console.error('Header element with class ".header" not found.');
        return;
    }

    // This function checks the scroll position and toggles the class
    const handleHeaderTransparency = () => {
        // We check if the user has scrolled more than 10px down.
        // If they have, we add the "scrolled" class.
        if (window.scrollY > 10) {
            header.classList.add('header-scrolled');
        } else {
            // If they are at the top, we remove the "scrolled" class.
            header.classList.remove('header-scrolled');
        }
    };

    // Listen for any scroll event on the page
    window.addEventListener('scroll', handleHeaderTransparency);

    // Run the function once when the page loads to set the correct initial state
    handleHeaderTransparency();

});

//header transparency with scroll script END