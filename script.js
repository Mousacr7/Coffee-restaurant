document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen
  const loadingScreen = document.querySelector('.loading-screen');
  
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500);
  
  // Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('closeBtn');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Sticky Header
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });
  
  // Current Time and Date
  function updateDateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    // Format time (HH:MM AM/PM)
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    
    // Format date (Weekday, Month Day)
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
  }
  
  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
  
  // Menu Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuItemsContainer = document.querySelector('.menu-items');
  
  // Sample menu data
  const menuData = {
    coffee: [
      {
        id: 1,
        name: "Espresso",
        price: 3.50,
        description: "A strong, concentrated coffee served in a small cup",
        rating: "★★★★★",
        image:"./imgc/coffe.jpeg"
    },
      {
        id: 2,
        name: "Cappuccino",
        price: 4.50,
        description: "Espresso with steamed milk and a silky layer of foam",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
  },
      {
        id: 3,
        name: "Latte",
        price: 4.75,
        description: "Espresso with a lot of steamed milk and a light layer of foam",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
      },      {
        id: 4,
        name: "Americano",
        price: 3.75,
        description: "Espresso diluted with hot water for a smoother taste",
        rating: "★★★☆☆",
        image:"./imgc/coffe.jpeg"
     },
      {
        id: 5,
        name: "Mocha",
        price: 5.00,
        description: "Espresso with chocolate and steamed milk, topped with whipped cream",
        rating: "★★★★★",
        image:"./imgc/coffe.jpeg"
      },      {
        id: 6,
        name: "Cold Brew",
        price: 4.25,
        description: "Smooth coffee brewed cold for 12 hours for low acidity",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
     }
    ],
    tea: [
      {
        id: 7,
        name: "Earl Grey",
        price: 3.00,
        description: "Classic black tea with bergamot flavor",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
     },
      {
        id: 8,
        name: "Chamomile",
        price: 3.00,
        description: "Soothing herbal tea perfect for relaxation",
        rating: "★★★☆☆",
        image:"./imgc/coffe.jpeg"
     },
      {
        id: 9,
        name: "Green Tea",
        price: 3.25,
        description: "Light and refreshing with antioxidants",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
     },
      {
        id: 10,
        name: "Chai Latte",
        price: 4.50,
        description: "Spiced tea with steamed milk for a creamy texture",
        rating: "★★★★★",
        image:"./imgc/coffe.jpeg"
  }
    ],
    pastries: [
      {
        id: 11,
        name: "Croissant",
        price: 3.50,
        description: "Buttery, flaky pastry perfect with any coffee",
        rating: "★★★★★",
        image: "./imgc/coffe.jpeg"
     },
      {
        id: 12,
        name: "Blueberry Muffin",
        price: 3.75,
        description: "Moist muffin packed with fresh blueberries",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
      },
      {
        id: 13,
        name: "Cinnamon Roll",
        price: 4.25,
        description: "Sweet roll with cinnamon sugar and icing",
        rating: "★★★★★",
        image:"./imgc/coffe.jpeg"
     },
      {
        id: 14,
        name: "Chocolate Chip Cookie",
        price: 2.75,
        description: "Classic cookie with melty chocolate chips",
        rating: "★★★★☆",
        image:"./imgc/coffe.jpeg"
      }
    ]
  };
  
  // Function to render menu items
  function renderMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    menuData[category].forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.innerHTML = `
        <div class="menu-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item-content">
          <div class="menu-item-title">
            <h3>${item.name}</h3>
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
            <p class="menu-item-desc">${item.description}</p>
          </div>
          <div class="menu-item-footer">
            <div class="rating">${item.rating}</div>
            <button class="add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart</button>
          </div>
        </div>
      `;
      menuItemsContainer.appendChild(menuItem);
    });
    
    // Add event listeners to the new add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', addToCart);
    });
  }
  
  // Initialize with coffee menu
  renderMenuItems('coffee');
  
  // Tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Render the corresponding menu
      renderMenuItems(button.dataset.category);
    });
  });
  
  // Shop Products
  const productsGrid = document.querySelector('.products-grid');
  
  // Sample product data
  const productsData = [
    {
      id: 101,
      name: "Ethiopian Yirgacheffe",
      price: 14.99,
      description: "Light roast with floral and citrus notes",
      image:"./imgc/coffe.jpeg"
 },
    {
      id: 102,
      name: "Colombian Supremo",
      price: 12.99,
      description: "Medium roast with caramel and nutty flavors",
      image:"./imgc/coffe.jpeg"}    ,
    {
      id: 103,
      name: "Sumatra Mandheling",
      price: 15.99,
      description: "Dark roast with earthy and chocolatey tones",
      image:"./imgc/coffe.jpeg"
    },    {
      id: 104,
      name: "French Press",
      price: 24.99,
      description: "Perfect for brewing rich, full-bodied coffee",
      image:"./imgc/coffe.jpeg"
  },
    {
      id: 105,
      name: "Pour Over Kit",
      price: 29.99,
      description: "Everything you need for the perfect pour over",
      image:"./imgc/coffe.jpeg"}
    ,
    {
      id: 106,
      name: "Coffee Mug Set",
      price: 19.99,
      description: "Set of 2 premium ceramic coffee mugs",
      image:"./imgc/coffe.jpeg"
    }
 ];
  
  // Render products
  productsData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <span class="product-price">$${product.price.toFixed(2)}</span>
        <p>${product.description}</p>
        <div class="product-footer">
          <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
  
  // Add event listeners to product add to cart buttons
  document.querySelectorAll('.products-grid .add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
  });
  
  // Shopping Cart Functionality
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const closeCart = document.getElementById('closeCart');
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cartTotal');
  const cartCountElement = document.querySelector('.cart-count');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Update cart count
  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
  }
  
  // Update cart total
  function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }
  
  // Render cart items
  function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
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
          <div class="cart-item-title">
            <h4>${item.name}</h4>
            <span class="remove-item" data-id="${item.id}">&times;</span>
          </div>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}">+</button>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to remove and quantity buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', removeFromCart);
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
      button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
      button.addEventListener('click', increaseQuantity);
    });
    
    updateCartCount();
    updateCartTotal();
  }
  
  // Add to cart function
  function addToCart(e) {
    const id = parseInt(e.target.dataset.id);
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);
    const image = e.target.dataset.image;
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      // Increase quantity
      existingItem.quantity += 1;
    } else {
      // Add new item
      cart.push({
        id,
        name,
        price,
        image,
        quantity: 1
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
    
    // Show cart sidebar
    cartSidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'cart-success-msg';
    successMsg.textContent =` ${name} added to cart`;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
      successMsg.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      successMsg.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(successMsg);
      }, 300);
    }, 2000);
  }
  
  // Remove from cart
  function removeFromCart(e) {
    const id = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== id);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Decrease quantity
  function decreaseQuantity(e) {
    const id = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === id);
    
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter(item => item.id !== id);
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Increase quantity
  function increaseQuantity(e) {
    const id = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === id);
    item.quantity += 1;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Toggle cart sidebar
  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  
  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    document.body.style.overflow = '';
  });
  
  // Initialize cart
  renderCartItems();
  
  // Testimonials Slider
  const testimonialsData = [
    {
      id: 1,
      content: "The best coffee I've ever had! The atmosphere is cozy and the staff is friendly. I come here every morning before work.",
      author: "Sarah Johnson",
      role: "Regular Customer",
      image:"./imgc/coffe.jpeg"
  },
    {
      id: 2,
      content: "As a coffee connoisseur, I can confidently say that Musa's Coffee serves exceptional quality. Their beans are always fresh and perfectly roasted.",
      author: "Michael Chen",
      role: "Coffee Enthusiast",
      image:"./imgc/coffe.jpeg"
  },
    {
      id: 3,
      content: "I love working from Musa's Coffee. Great WiFi, delicious pastries, and of course, amazing coffee. It's my go-to spot for productivity.",
      author: "Emily Rodriguez",
      role: "Freelance Designer",
      image:"./imgc/coffe.jpeg"
  }
  ];
  
  const testimonialsSlider = document.querySelector('.testimonials-slider');
  
  // Render testimonials
  testimonialsData.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    testimonialElement.innerHTML = `
      <p class="testimonial-content">"${testimonial.content}"</p>
      <div class="testimonial-author">
        <div class="author-img">
          <img src="${testimonial.image}" alt="${testimonial.author}">
        </div>
        <h4 class="author-name">${testimonial.author}</h4>
        <p class="author-role">${testimonial.role}</p>
      </div>
    `;
    testimonialsSlider.appendChild(testimonialElement);
  });
  
  // Initialize testimonial slider (simple version)
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  // Show first testimonial
  showTestimonial(currentTestimonial);
  
  // Auto-rotate testimonials every 5 seconds
  setInterval(nextTestimonial, 5000);
  
  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // In a real app, you would send this to your server
    console.log('Subscribed email:', email);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'newsletter-success-msg';
    successMsg.textContent = 'Thanks for subscribing!';
    this.parentNode.appendChild(successMsg);
    
    setTimeout(() => {
      successMsg.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      successMsg.classList.remove('show');
      setTimeout(() => {
        successMsg.remove();
      }, 300);
    }, 3000);
    
    // Reset form
    this.reset();
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});