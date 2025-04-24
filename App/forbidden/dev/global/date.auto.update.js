/**
 * BlackBlazent Date Auto Update
 * Automatically updates year display and manages year-related components
 */

(function() {
    let hideTimeoutId = null;
  
    // Function to update the year text in elements with class "vertical-year"
    function updateYearDisplay() {
      // Get current year
      const currentYear = new Date().getFullYear();
      
      // Find all elements with class "vertical-year"
      const yearElements = document.querySelectorAll('.vertical-year');
      
      // Update each element
      yearElements.forEach(element => {
        // Only update if the content is a year (4 digits)
        const content = element.textContent.trim();
        if (/^\d{4}$/.test(content)) {
          element.textContent = currentYear.toString();
          element.setAttribute('data-year', currentYear.toString());
        }
      });
      
      // Update copyright year references
      const copyrightElements = document.querySelectorAll('.copyright-year');
      copyrightElements.forEach(element => {
        element.textContent = currentYear.toString();
      });
    }
    
    function showTimeline(yearElement, timeline, isClick = false) {
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
        hideTimeoutId = null;
      }
  
      // Immediately show the timeline
      const rect = yearElement.getBoundingClientRect();
      const timelineWidth = timeline.offsetWidth || 40;
      
      // Ensure it's shown with display block first, then apply transitions
      timeline.style.display = 'none';
      timeline.style.top = `${rect.top}px`;
      timeline.style.left = `${rect.left - timelineWidth - 10}px`;
      timeline.style.height = `${rect.height}px`;
      
      // Force reflow to ensure display takes effect before adding visible class
      void timeline.offsetWidth;
      
      timeline.classList.add('visible');
      document.body.classList.add('timeline-active');
      
      // Update years in timeline
      const currentYear = new Date().getFullYear();
      const yearNodes = timeline.querySelectorAll('.timeline-year');
      yearNodes.forEach((yearNode, index) => {
        yearNode.textContent = (currentYear - 2 + index).toString();
      });
      
      // Update copyright
      const copyright = timeline.querySelector('.copyright-text');
      if (copyright) {
        copyright.innerHTML = `Copyright BlackBlazent ${currentYear} <br>and at the above are the prevous year.`;
      }
      
      // Position triangle to point at current year
      const trianglePointer = timeline.querySelector('.timeline-triangle');
      if (trianglePointer) {
        const yearElements = timeline.querySelectorAll('.timeline-year');
        if (yearElements.length > 0) {
          const lastYearElement = yearElements[yearElements.length - 1];
          const lastYearRect = lastYearElement.getBoundingClientRect();
          const timelineRect = timeline.getBoundingClientRect();
          const triangleTop = lastYearRect.top - timelineRect.top + (lastYearRect.height / 2) - 10;
          trianglePointer.style.top = `${triangleTop}px`;
        }
      }
      
      // Store click state
      timeline.dataset.clickOpened = isClick ? 'true' : 'false';
    }
  
    function hideTimeline(timeline) {
      // Don't hide if it was opened by a click
      if (timeline.dataset.clickOpened === 'true') {
        return;
      }
      
      // Immediately hide the timeline
      timeline.classList.remove('visible');
      document.body.classList.remove('timeline-active');
      
      // Add a delay to allow transitions to complete before hiding
      hideTimeoutId = setTimeout(() => {
        if (!timeline.matches(':hover')) {
          timeline.style.display = 'none';
        }
      }, 300);
    }
    
    // Initialize timeline interaction
    function initTimelineInteraction() {
      const yearElements = document.querySelectorAll('.vertical-year');
      const timeline = ensureTimelineExists();
      
      // Initially hidden
      if (timeline) {
        timeline.style.display = 'none';
      }
      
      yearElements.forEach(element => {
        // Add hover class for CSS targeting
        element.classList.add('year-hover-enabled');
        
        // HOVER EVENTS - show/hide immediately
        element.addEventListener('mouseenter', () => {
          showTimeline(element, timeline);
        });
        
        element.addEventListener('mouseleave', () => {
          hideTimeline(timeline);
        });
      });
      
      if (timeline) {
        timeline.addEventListener('mouseenter', () => {
          if (hideTimeoutId) {
            clearTimeout(hideTimeoutId);
            hideTimeoutId = null;
          }
          // Ensure it stays visible when hovered
          timeline.classList.add('visible');
        });
        
        timeline.addEventListener('mouseleave', () => {
          // Hide immediately when mouse leaves
          if (timeline.dataset.clickOpened !== 'true') {
            hideTimeline(timeline);
          }
        });
      }
      
      return timeline;
    }
    
    // Ensure the timeline is in the DOM
    function ensureTimelineExists() {
      let timeline = document.querySelector('.year-timeline');
      
      if (!timeline) {
        const currentYear = new Date().getFullYear();
        timeline = document.createElement('div');
        timeline.className = 'year-timeline';
        timeline.id = 'year-timeline';
        timeline.dataset.clickOpened = 'false';
        timeline.style.display = 'none'; // Hidden by default
        timeline.innerHTML = `
          <div class="timeline-content">
            <div class="timeline-years">
              <div class="timeline-year">${currentYear - 2}</div>
              <div class="timeline-year">${currentYear - 1}</div>
              <div class="timeline-year">${currentYear}</div>
            </div>
            <div class="timeline-triangle"></div>
            <div class="timeline-copyright">
              <div class="copyright-text">
                Copyright BlackBlazent ${currentYear}
                <br>and at the above are the prevous year.
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(timeline);
      }
      
      return timeline;
    }
    
    // Run when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
      updateYearDisplay();
      initTimelineInteraction();
      
      // Update periodically in case the page is open across midnight on New Year's
      setInterval(updateYearDisplay, 3600000); // Check every hour
    });
  })(); 