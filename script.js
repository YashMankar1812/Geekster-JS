        // Auto-sliding functionality
        document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.project-card');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            const totalSlides = 2; // Number of slide groups
            
            // Group projects into slides (2 projects per slide on mobile)
            function groupProjects() {
                const projectsGrid = document.querySelector('.projects-grid');
                if (window.innerWidth <= 768) {
                    projectsGrid.style.overflowX = 'hidden';
                    projectsGrid.style.display = 'flex';
                    projectsGrid.style.flexWrap = 'nowrap';
                    projectsGrid.style.scrollSnapType = 'x mandatory';
                    
                    // Hide all projects initially
                    projectCards.forEach(card => {
                        card.style.minWidth = '100%';
                        card.style.scrollSnapAlign = 'start';
                    });
                } else {
                    projectsGrid.style = '';
                    projectCards.forEach(card => card.style = '');
                }
            }
            
            // Initialize grouping
            groupProjects();
            window.addEventListener('resize', groupProjects);
            
            // Auto slide every 5 seconds
            setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 5000);
            
            // Dot click navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlider();
                });
            });
            
            function updateSlider() {
                if (window.innerWidth <= 768) {
                    const projectsGrid = document.querySelector('.projects-grid');
                    projectsGrid.scrollTo({
                        left: currentSlide * window.innerWidth,
                        behavior: 'smooth'
                    });
                }
                
                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
            
            // Animation on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.project-card').forEach(card => {
                observer.observe(card);
            });
        });



        // Changing header text
const texts = [
    "Interactive Web Projects",
    "JavaScript Games",
    "Creative UI Experiments",
    "Learn by Building"
  ];
  
  let index = 0;
  const textElement = document.getElementById("changing-text");
  
  setInterval(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
  }, 2500);
  
  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  