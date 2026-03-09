// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== ACTIVE LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===== CAR DATA (Sample - Add your actual car data) =====
const cars = [
    {
        id: 1,
        brand: 'Ferrari',
        model: 'F8 Tributo',
        year: 2024,
        price: '1,200,000 AED',
        image: 'images/F8 Tributo.jpeg',
        mileage: '0 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        featured: true
    },
    {
        id: 2,
        brand: 'Lamborghini',
        model: 'Huracán EVO',
        year: 2023,
        price: '1,500,000 AED',
        image: 'images/Lamborghini.webp',
        mileage: '500 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        featured: true
    },
    {
        id: 3,
        brand: 'Rolls Royce',
        model: 'Ghost',
        year: 2024,
        price: '2,500,000 AED',
        image: 'images/Rolls Royce.jpeg',
        mileage: '0 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        featured: true
    },
    {
        id: 4,
        brand: 'Porsche',
        model: '911 Turbo S',
        year: 2023,
        price: '1,100,000 AED',
        image: 'images/911 Turbo S.jpeg',
        mileage: '200 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        featured: false
    }
];

// ===== DISPLAY INVENTORY =====
function displayInventory() {
    const inventoryGrid = document.getElementById('inventoryGrid');
    
    cars.forEach(car => {
        const carCard = `
            <div class="car-card" data-aos="fade-up">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                    <span class="car-tag">${car.year}</span>
                </div>
                <div class="car-details">
                    <h3>${car.brand} ${car.model}</h3>
                    <div class="car-price">${car.price}</div>
                    <div class="car-specs">
                        <div class="spec">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>${car.mileage}</span>
                        </div>
                        <div class="spec">
                            <i class="fas fa-cog"></i>
                            <span>${car.transmission}</span>
                        </div>
                        <div class="spec">
                            <i class="fas fa-gas-pump"></i>
                            <span>${car.fuel}</span>
                        </div>
                    </div>
                    <button class="btn-details" onclick="viewDetails(${car.id})">
                        View Details <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        inventoryGrid.innerHTML += carCard;
    });
}

// ===== VIEW CAR DETAILS =====
function viewDetails(carId) {
    const car = cars.find(c => c.id === carId);
    alert(`Viewing details for ${car.brand} ${car.model}\nPrice: ${car.price}\nWe'll contact you shortly!`);
    // You can replace this with a modal or redirect to details page
}

// ===== FILTER CARS =====
function filterCars() {
    const brand = document.getElementById('brand').value;
    const priceRange = document.getElementById('priceRange').value;
    const year = document.getElementById('year').value;
    
    // Filter logic here
    console.log('Filtering by:', { brand, priceRange, year });
    alert('Filter feature coming soon!');
}

// ===== FEATURED SLIDER =====
let currentSlide = 0;
const featuredCars = cars.filter(car => car.featured);

function initSlider() {
    const slider = document.getElementById('featuredSlider');
    
    featuredCars.forEach(car => {
        const slide = `
            <div class="featured-slide">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <div class="slide-content">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>${car.price}</p>
                </div>
            </div>
        `;
        slider.innerHTML += slide;
    });
}

document.querySelector('.slider-arrow.next').addEventListener('click', () => {
    const slides = document.querySelectorAll('.featured-slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        document.querySelector('.featured-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        document.querySelector('.featured-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    e.target.reset();
});

// ===== NEWSLETTER FORM =====
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    displayInventory();
    initSlider();
    
    // Auto-rotate slider
    setInterval(() => {
        const slides = document.querySelectorAll('.featured-slide');
        if (slides.length > 0) {
            currentSlide = (currentSlide + 1) % slides.length;
            document.querySelector('.featured-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, 5000);
});