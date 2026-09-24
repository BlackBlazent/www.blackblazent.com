/**
 * BlackBlazent Mobile Responsive Script
 * Handles touch-based navigation for mobile devices
 * Enables swipe up/down to navigate between sections
 */

// Define available sections in the order they should appear when swiping
const SECTIONS = [
  'home',
  'gallery',
  'products',
  'services',
  'privacy',
  'community',
  'blog',
  'documentation',
  'about'
];

// Mobile detection
const isMobile = (): boolean => {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Touch handling variables
let touchStartY = 0;
let touchEndY = 0;
let lastNavigationTime = 0;
let currentSectionIndex = 0;

// Initialize the touch scroll navigation
function initTouchScrollNavigation(): void {
  // Only initialize on mobile devices
  if (!isMobile()) return;
  
  // Find current section from URL hash
  const hash = window.location.hash;
  const section = hash.replace('#/', '');
  currentSectionIndex = SECTIONS.indexOf(section) !== -1 ? SECTIONS.indexOf(section) : 0;
  
  // Add touch event listeners
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  
  // Hide sidebar on mobile
  const sidebar = document.querySelector('.sidebar.left') as HTMLElement;
  if (sidebar) {
    sidebar.style.display = 'none';
  }
  
  // Add mobile navigation indicator
  addMobileNavigationIndicator();
  
  console.log('BlackBlazent: Mobile touch navigation initialized');
}

// Handle touch start event
function handleTouchStart(event: TouchEvent): void {
  touchStartY = event.changedTouches[0].screenY;
}

// Handle touch end event
function handleTouchEnd(event: TouchEvent): void {
  touchEndY = event.changedTouches[0].screenY;
  handleSwipe();
}

// Process the swipe and navigate if needed
function handleSwipe(): void {
  // Prevent rapid fire navigation (300ms cooldown)
  const now = Date.now();
  if (now - lastNavigationTime < 300) return;
  lastNavigationTime = now;
  
  // Calculate swipe distance
  const swipeDistance = touchEndY - touchStartY;
  const minSwipeDistance = 50; // Minimum pixels to trigger navigation
  
  // Determine navigation direction
  if (swipeDistance > minSwipeDistance) {
    // Swipe down - go to previous section
    navigateToPreviousSection();
  } else if (swipeDistance < -minSwipeDistance) {
    // Swipe up - go to next section
    navigateToNextSection();
  }
}

// Navigate to the previous section
function navigateToPreviousSection(): void {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    navigateToSection(SECTIONS[currentSectionIndex]);
  }
}

// Navigate to the next section
function navigateToNextSection(): void {
  if (currentSectionIndex < SECTIONS.length - 1) {
    currentSectionIndex++;
    navigateToSection(SECTIONS[currentSectionIndex]);
  }
}

// Navigate to a specific section
function navigateToSection(section: string): void {
  window.location.hash = `#/${section}`;
  
  // Update the mobile navigation indicator
  updateMobileNavigationIndicator();
  
  // Add animation class to the page content
  const pageContent = document.querySelector('.page-content') as HTMLElement;
  if (pageContent) {
    pageContent.classList.add('page-transition');
    setTimeout(() => {
      pageContent.classList.remove('page-transition');
    }, 500);
  }
}

// Add mobile navigation indicator
function addMobileNavigationIndicator(): void {
  // Create container for dots
  const indicatorContainer = document.createElement('div');
  indicatorContainer.className = 'mobile-nav-indicator';
  
  // Create dots for each section
  SECTIONS.forEach((section, index) => {
    const dot = document.createElement('div');
    dot.className = `nav-dot ${index === currentSectionIndex ? 'active' : ''}`;
    dot.setAttribute('data-section', section);
    indicatorContainer.appendChild(dot);
  });
  
  // Add to body
  document.body.appendChild(indicatorContainer);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .mobile-nav-indicator {
      display: none;
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      flex-direction: column;
      gap: 10px;
    }
    
    .nav-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s ease;
    }
    
    .nav-dot.active {
      background-color: #fcee0a;
      transform: scale(1.5);
    }
    
    .page-transition {
      animation: slideTransition 0.5s ease;
    }
    
    @keyframes slideTransition {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @media (max-width: 768px) {
      .mobile-nav-indicator {
        display: flex;
      }
    }
  `;
  document.head.appendChild(style);
}

// Update the mobile navigation indicator
function updateMobileNavigationIndicator(): void {
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((dot, index) => {
    if (index === currentSectionIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initTouchScrollNavigation);

// Re-initialize when window is resized
window.addEventListener('resize', () => {
  // Check if we need to show/hide the sidebar based on screen size
  const sidebar = document.querySelector('.sidebar.left') as HTMLElement;
  if (sidebar) {
    sidebar.style.display = isMobile() ? 'none' : 'flex';
  }
  
  // Update the mobile navigation indicator
  updateMobileNavigationIndicator();
});
