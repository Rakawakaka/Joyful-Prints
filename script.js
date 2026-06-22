// Sample 3D Print Data
const products = [
    {
        id: 1,
        name: 'Dragon Miniature',
        type: 'miniature',
        description: 'Detailed fantasy dragon figurine with intricate wings',
        emoji: '🐉'
    },
    {
        id: 2,
        name: 'Desk Organizer',
        type: 'functional',
        description: 'Practical organizer for pens and small office items',
        emoji: '📦'
    },
    {
        id: 3,
        name: 'Plant Pot',
        type: 'decorative',
        description: 'Stylish geometric flower pot for succulents',
        emoji: '🪴'
    },
    {
        id: 4,
        name: 'Action Figure',
        type: 'toy',
        description: 'Articulated action figure with movable joints',
        emoji: '🤖'
    },
    {
        id: 5,
        name: 'Pendant Necklace',
        type: 'jewelry',
        description: 'Elegant geometric pendant with smooth finish',
        emoji: '💎'
    },
    {
        id: 6,
        name: 'Castle Model',
        type: 'miniature',
        description: 'Intricate medieval castle with detailed architecture',
        emoji: '🏰'
    },
    {
        id: 7,
        name: 'Cable Organizer',
        type: 'functional',
        description: 'Keep your cables neat and organized on your desk',
        emoji: '🔌'
    },
    {
        id: 8,
        name: 'Abstract Art Sculpture',
        type: 'decorative',
        description: 'Modern abstract sculpture for contemporary spaces',
        emoji: '🎨'
    },
    {
        id: 9,
        name: 'Fidget Toy',
        type: 'toy',
        description: 'Satisfying fidget spinner with smooth bearings',
        emoji: '⌛'
    },
    {
        id: 10,
        name: 'Ring',
        type: 'jewelry',
        description: 'Sleek modern ring with comfortable fit',
        emoji: '💍'
    },
    {
        id: 11,
        name: 'Dinosaur Figure',
        type: 'miniature',
        description: 'Realistic T-Rex dinosaur miniature model',
        emoji: '🦕'
    },
    {
        id: 12,
        name: 'Phone Stand',
        type: 'functional',
        description: 'Sturdy phone stand for any smartphone size',
        emoji: '📱'
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupNavigation();
    setupFilters();
    setupContactForm();
});

// Render products to grid
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-type', product.type);
        
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <span class="product-type">${capitalizeFirst(product.type)}</span>
                <p class="product-description">${product.description}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Setup filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const filterType = this.getAttribute('data-filter');
            filterProducts(filterType);
        });
    });
}

// Filter products by type
function filterProducts(type) {
    if (type === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.type === type);
        renderProducts(filtered);
    }
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const section = this.getAttribute('data-section');
            navigateTo(section);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Navigate to section
function navigateTo(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Setup contact form
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            form.reset();
        });
    }
}

// Utility function to capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
