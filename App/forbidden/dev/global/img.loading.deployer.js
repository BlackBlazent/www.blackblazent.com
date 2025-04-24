/**
 * Applies lazy loading to all images on a webpage
 * Handles both existing images and dynamically added ones
 */
(function() {
    // Function to apply lazy loading to an image
    function applyLazyLoading(img) {
      // Add loading="lazy" attribute regardless of previous value
      img.setAttribute('loading', 'lazy');
      return true;
    }
  
    // Function to process all images on the page
    function processImages() {
      // Get all img elements on the page
      const images = document.querySelectorAll('img');
      let modifiedCount = 0;
      
      if (images.length === 0) {
        console.log("No images found on the page yet. Will continue monitoring...");
      } else {
        // Loop through each image
        images.forEach(img => {
          if (applyLazyLoading(img)) {
            modifiedCount++;
          }
        });
        
        console.log(`Lazy loading applied to ${modifiedCount} images.`);
      }
    }
  
    // Process images immediately
    processImages();
    
    // Set up a MutationObserver to watch for dynamically added images
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // Look for added nodes
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          let newImages = 0;
          
          // Check each added node
          mutation.addedNodes.forEach(function(node) {
            // If the added node is an image, apply lazy loading
            if (node.nodeName === 'IMG') {
              if (applyLazyLoading(node)) {
                newImages++;
              }
            }
            
            // If the added node contains images, process them
            if (node.querySelectorAll) {
              const childImages = node.querySelectorAll('img');
              childImages.forEach(function(img) {
                if (applyLazyLoading(img)) {
                  newImages++;
                }
              });
            }
          });
          
          if (newImages > 0) {
            console.log(`Lazy loading applied to ${newImages} newly added images.`);
          }
        }
      });
    });
  
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Also check again after window load event
    window.addEventListener('load', function() {
      processImages();
      console.log("Re-checked images after page load.");
    });
    
    // Check periodically in case some images are added through methods 
    // that might not trigger the MutationObserver
    setInterval(processImages, 3000);
  
    console.log("Image lazy loading deployer initialized.");
  })();