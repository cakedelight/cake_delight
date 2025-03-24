document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
    }
    
    // Initially sidebar should be closed
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('sidebar-collapsed');

    // Toggle sidebar when clicking the button
    sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSidebar();
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = sidebarToggle.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('collapsed')) {
                toggleSidebar();
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && sidebar.classList.contains('collapsed')) {
            toggleSidebar();
        }
    });
});

// Function to toggle the city dropdown
function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('cityDropdown');
    const isOpen = dropdown.classList.contains('show');
    
    // Close all dropdowns first
    const dropdowns = document.getElementsByClassName('dropdown-content');
    Array.from(dropdowns).forEach(d => d.classList.remove('show'));
    
    // Toggle this dropdown
    if (!isOpen) {
        dropdown.classList.add('show');
    }
}

// Function to toggle the Swiggy city dropdown
function toggleSwiggyDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('swiggyDropdown');
    const isOpen = dropdown.classList.contains('show');
    
    // Close all dropdowns first
    const dropdowns = document.getElementsByClassName('dropdown-content');
    Array.from(dropdowns).forEach(d => d.classList.remove('show'));
    
    // Toggle this dropdown
    if (!isOpen) {
        dropdown.classList.add('show');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.city-dropdown')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        Array.from(dropdowns).forEach(d => d.classList.remove('show'));
    }
});

// Prevent dropdowns from closing when clicking inside them
document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}); 