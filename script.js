// Global variables
let selectedPlanData = null;

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
    }
}

// Open modal function
function openModal(planName, price) {
    selectedPlanData = { name: planName, price: price };
    const selectedPlanElement = document.getElementById('selectedPlan');
    if (selectedPlanElement) {
        selectedPlanElement.textContent = `${planName} Plan ($${price}/month)`;
    }
    
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        const form = document.getElementById('emailForm');
        if (form) {
            form.reset();
        }
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('emailModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            const formData = {
                email: document.getElementById('email').value,
                location: document.getElementById('location').value,
                serverType: document.getElementById('serverType').value,
                plan: selectedPlanData.name.toLowerCase(),
                price: selectedPlanData.price,
                timestamp: new Date().toISOString()
            };

            // Create CSV content
            const csvHeader = 'Email,Plan,Price,Location,ServerType,Timestamp\n';
            const csvRow = `${formData.email},${formData.plan},${formData.price},${formData.location},${formData.serverType},${formData.timestamp}\n`;
            const csvContent = csvHeader + csvRow;
            
            // Create and download file
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `customer_data_${Date.now()}.csv`;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            alert('Thank you! Your information has been saved and downloaded as a CSV file.');
            closeModal();
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }
});

// Handle escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Close mobile menu when clicking on a link
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') && window.innerWidth <= 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('show');
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('show');
        }
    }
});