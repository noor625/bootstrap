function changeColor(colorClass) {
    const navbar = document.querySelector('.navbar');
    navbar.className = `navbar navbar-expand-lg navbar-dark ${colorClass}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Basic auto-slide (optional)
    // setInterval(nextSlide, 5000);
});
// features logos
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
    });
});
//portfolio images 
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded');
});


// about
function showOverlay(item) {
    alert(item + ' clicked!');
}

//about number
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute("aria-valuenow") + "%";
    });
});

// JavaScript code placeholder
console.log('Progress Bar Layout Loaded');
//services

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            } else {
                entry.target.style.opacity = 0.8;
                entry.target.style.transform = 'translateY(10px)';
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold as needed

    serviceCards.forEach(card => {
        card.style.opacity = 0.8;
        card.style.transform = 'translateY(10px)';
        card.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        observer.observe(card);
    });
});

//services count down

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the number, the faster the counter

    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-count'));
            const count = parseInt(counter.innerText);

            const increment = Math.trunc(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


//

// Color Picker Functionality
const colors = ['#dc3545', '#0d6efd', '#0dcaf0', '#198754', '#ffc107'];
const colorPicker = document.createElement('div');
colorPicker.className = 'color-picker';
document.body.appendChild(colorPicker);

colors.forEach(color => {
  const colorBox = document.createElement('div');
  colorBox.style.backgroundColor = color;
  colorBox.onclick = () => changeColor(color);
  colorPicker.appendChild(colorBox);
});

function changeColor(color) {
  document.querySelectorAll('.stat-box').forEach(box => {
    box.style.color = color;
  });
}
//team
document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.querySelectorAll(".color-picker div");
    const container = document.querySelector(".container-fluid");

    colorPicker.forEach(color => {
        color.addEventListener("click", function() {
            const bgColor = this.style.backgroundColor;
            container.style.backgroundColor = bgColor;
        });
    });
});

//latest news
// Currently, no JavaScript functionality is needed based on the provided layout.
console.log("News section loaded");


//latest news images
// Log message to indicate script is working
console.log("Slideshow and date display initialized.");


//three image option

// JavaScript to log the current slide index
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('testimonialCarousel');
  carousel.addEventListener('slide.bs.carousel', function (event) {
      console.log("Current slide index: ", event.to);
  });
});
//testiminal
// You can add JavaScript for any dynamic behavior or animations here.
// For this static content, JavaScript might not be strictly necessary.
// Example of a simple fade-in animation on load (optional):
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
});
//contact

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name && email && phone && message) {
    alert('Message sent successfully!\n\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + phone + '\n' +
          'Message: ' + message);
  } else {
    alert('Please fill out all the fields.');
  }
});


// contact info
// JavaScript for the SEND MESSAGE button
document.querySelector('.btn-success').addEventListener('click', function() {
  alert('Message sent successfully!');
});


