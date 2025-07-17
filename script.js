// Document Ready Function
(function($) {
    'use strict';

    // Preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // Mobile Menu Toggle
    $('.mobile-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    // Close mobile menu when clicking on a nav link
    $('.nav-links a').on('click', function() {
        $('.mobile-menu').removeClass('active');
        $('.nav-links').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    // Smooth Scrolling for Navigation Links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
            location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 100);
                return false;
            }
        }
    });

    // Header Scroll Effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // Menu Category Tabs
    $('.category-btn').on('click', function() {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        
        const category = $(this).data('category');
        
        if (category === 'all') {
            $('.menu-item').fadeIn(300);
        } else {
            $('.menu-item').fadeOut(100);
            $(`.menu-item[data-category="${category}"]`).fadeIn(300);
        }
    });

    // Initialize Menu Items
    function initMenu() {
        const menuItems = [
            {
                id: 1,
                name: 'Classic Jaggery Tea',
                price: '₹30',
                category: 'tea',
                description: 'Traditional tea sweetened with pure jaggery for a rich and satisfying experience.',
                image: 'images/Menu1.png'
            },
            {
                id: 2,
                name: 'Jaggery Coffee',
                price: '₹50',
                category: 'tea',
                description: 'Aromatic coffee perfectly balanced with natural jaggery,Served hot for a comforting experience.',
                image: 'images/Menu2.png'
            },
            {
                id: 3,
                name: 'Lemon Honey Tea',
                price: '₹50',
                category: 'tea',
                description: 'A refreshing blend of zesty lemon and pure honey in warm tea, perfect for soothing the throat and boosting immunity.',
                image: 'images/Menu3.png'
            },
            {
                id: 4,
                name: 'Aloo Samosa',
                price: '₹30',
                category: 'snacks',
                description: 'Crispy pastry filled with spiced potatoes and peas.',
                image: 'images/Menu4.png'
            },
            {
                id: 5,
                name: 'Osmania Biscuit (3 Pcs)',
                price: '₹50',
                category: 'snacks',
                description: 'Spicy potato fritter in a bun with chutneys.',
                image: 'images/Menu5.png'
            }
        ];

        const menuContainer = $('#menu-items');
        
        menuItems.forEach(item => {
            const menuItem = `
                <div class="menu-item" data-category="${item.category}">
                    <div class="menu-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.name}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                    </div>
                </div>
            `;
            menuContainer.append(menuItem);
        });
    }

    // Initialize Testimonials
    function initTestimonials() {
        // Custom testimonials with video, image, and 5-star rating
        const testimonials = [
            {
                html: `<video width="320" height="240" controls poster="images/PosterReview1.png">
                            <source src="images/Review1.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>

                       <div class='stars'>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                        </div>
                        <p>Amazing tea and great service!<br>Highly recommended for anyone looking for a healthy and delicious tea experience. The staff is friendly and the ambiance is relaxing. Will visit again!</p>`
            }
        ];
        const testimonialContainer = document.querySelector('.testimonials-slider');
        testimonialContainer.innerHTML = '';
        testimonials.forEach(t => {
            const div = document.createElement('div');
            div.className = 'testimonial';
            div.innerHTML = t.html;
            testimonialContainer.appendChild(div);
        });
        // Initialize Scroll Carousel
        if (window.ScrollCarousel) {
            new ScrollCarousel('.testimonials-slider', {
                autoScroll: true,
                autoScrollSpeed: 2,
                smartScroll: true,
                visibleElements: 1,
                responsive: [
                    { maxWidth: 768, visibleElements: 1 }
                ]
            });
        }
    }

    // Contact Form Submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: $('input[type="text"]').val(),
            email: $('input[type="email"]').val(),
            phone: $('input[type="tel"]').val(),
            message: $('textarea').val()
        };

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Newsletter Subscription
    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        
        const email = $(this).find('input[type="email"]').val();
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        // Here you would typically send the email to your server
        alert('Thank you for subscribing to our newsletter!');
        $(this).find('input[type="email"]').val('');
    });

    // Initialize AOS (Animate On Scroll)
    function initAOS() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Initialize all functions when document is ready
    $(document).ready(function() {
        initMenu();
        initTestimonials();
        initAOS();
        
        // Add animation classes to elements
        $('.animate-on-scroll').each(function() {
            $(this).addClass('animate');
        });
    });

    // Add to Cart Functionality
    window.addToCart = function(id, name, price, image) {
        // Here you would typically add the item to a shopping cart
        // For this example, we'll just show an alert
        alert(`Added ${name} to your cart!`);
        
        // In a real implementation, you would:
        // 1. Add item to cart in local storage or state management
        // 2. Update cart counter
        // 3. Show a notification
    };

    // Back to Top Button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initialize Google Map (you'll need to add your API key)
    function initMap() {
        // Replace with your actual coordinates
        const location = { lat: 12.9716, lng: 77.5946 }; // Bangalore coordinates
        
        // Create a map centered at the specified location
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location,
            styles: [
                // Add your custom map styles here
                // Example: https://snazzymaps.com/
            ]
        });
        
        // Add a marker at the specified location
        new google.maps.Marker({
            position: location,
            map: map,
            title: 'Jaggary Tea Point',
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
    }

    // Load Google Maps API
    function loadGoogleMaps() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }

    // Call loadGoogleMaps when the page has finished loading
    window.onload = function() {
        loadGoogleMaps();
    };

})(jQuery);

// Add to cart functionality (simplified version)
let cart = [];

function addToCart(id, name, price, image) {
    const item = { id, name, price, image, quantity: 1 };
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    
    updateCartUI();
    showNotification(`${name} added to cart!`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }
    
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} x ${item.quantity}</p>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
}

function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }, 100);
}

// Initialize cart when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('jaggaryTeaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Save cart to localStorage before page unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('jaggaryTeaCart', JSON.stringify(cart));
    });
});
