/**
 * Gallery Script Template
 * Handles app switching functionality in the Gallery UI
 */

// App list data
interface AppData {
  id: string;
  name: string;
  description: string;
  details: string[];
  backdrop: string;
  modelImage: string;
  codename: string;
  info: string[];
}

// App list with all BlackBlazent applications
const appList: AppData[] = [
  {
    id: 'blackmusic',
    name: 'BlackMusic v1.1.01.001.0001',
    description: 'Music Ultra Superior Integrated Catalog. A music player designed to deliver an unparalleled audio experience. BlackMusic integrates a vast catalog of music with superior playback capabilities.',
    details: [
      'Integrate Streaming Service Providers',
      'Playground',
      'Extensions',
      'Built-in Toolkits',
      'And more...'
    ],
    backdrop: 'Music Player',
    modelImage: './src/assets/etc/gallery/blackmusic-model.png',
    codename: '//RavenSYNTHA',
    info: [
      'Codename: //RavenSYNTHA',
      'Exclusive Audio Player Components',
      'Tech-Audio // Futuristic'
    ]
  },
  {
    id: 'blackmiscellen',
    name: 'BlackMiscellen v2.3.04.002.0012',
    description: 'An integrated miscelleneous tools.',
    details: [
      'AI Agent Chatbot Framework',
      'Downloader',
      'File Converter',
      'File Compressor',
      'And more...'
    ],
    backdrop: 'Miscelleneous Tools',
    modelImage: './src/assets/icons/apps/uknown-app-1.png',
    codename: '//NyraOps',
    info: [
      'Codename: //NyraOps',
      'Multi-functional Utility Suite.',
      'Tech-Utility // Cybertex MavenX'
    ]
  },
  {
    id: 'blackvideo',
    name: 'BlackVideo v3.2.07.005.0023',
    description: 'Versatile Integrated Demi Empowerment Optimum—Player. A video player with integration of wide variety of playback functionalities.',
    details: [
      'Provides & Integrate LLMs Services',
      'Computer Vision',
      'Video OSINT',
      'Extensions',
      'And more...'
    ],
    backdrop: 'Video Player',
    modelImage: './src/assets/icons/apps/uknown-app-3.png',
    codename: '//Zephyra',
    info: [
      'Codename: //Zephyra',
      'Advanced playback capabilities',
      'Tech-Visual // Immersive video flow'
    ]
  },
  {
    id: 'blackgallery',
    name: 'BlackGallery v1.5.03.002.0008',
    description: 'Amalgameted Luminous Library Expo Recreation Yearnability. BlackGallery is a comprehensive and innovative gallery app.',
    details: [
      'Neural Image Enhancement',
      'Holographic Viewing Mode',
      'Smart Folder Organization',
      'Memory Reconstruction',
      'And more...'
    ],
    backdrop: 'Photo Gallery',
    modelImage: './src/assets/icons/apps/uknown-app-4.png',
    codename: '//AelinaOURA',
    info: [
      'Codename: //AelinaOURA',
      'Dynamic Image Processing with Memory Reconstruction',
      'Tech-Visual // Augmented'
    ]
  }
];

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initGalleryFunctionality();
});

/**
 * Initialize gallery functionality
 */
function initGalleryFunctionality() {
  // Wait for the gallery component to be rendered
  const checkInterval = setInterval(() => {
    const productContainer = document.querySelector('.product-container');
    const colorVariants = document.querySelector('.color-variants');
    
    if (productContainer && colorVariants) {
      clearInterval(checkInterval);
      setupEventListeners();
      // Set initial app (first one in the list)
      updateAppDisplay(0);
    }
  }, 500);
}

/**
 * Set up event listeners for color variants
 */
function setupEventListeners() {
  const colorElements = document.querySelectorAll('.color-variants .color');
  
  colorElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      // Remove active class from all colors
      colorElements.forEach(el => el.classList.remove('active'));
      // Add active class to clicked color
      element.classList.add('active');
      // Update display with corresponding app
      updateAppDisplay(index);
    });
  });
}

/**
 * Update the display with the selected app
 * @param index - Index of the app to display
 */
function updateAppDisplay(index: number) {
  if (index >= appList.length) {
    index = 0; // Fallback to first app if index is out of bounds
  }
  
  const app = appList[index];
  
  // Update product name
  const productNameElement = document.querySelector('.product-name');
  if (productNameElement) {
    productNameElement.textContent = app.name;
  }
  
  // Update product description
  const productDescriptionElement = document.querySelector('.product-description p');
  if (productDescriptionElement) {
    productDescriptionElement.textContent = app.description;
  }
  
  // Update product details
  const productDetailsListElement = document.querySelector('.product-details ul');
  if (productDetailsListElement) {
    productDetailsListElement.innerHTML = '';
    app.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      productDetailsListElement.appendChild(li);
    });
  }
  
  // Update backdrop text
  const backdropElement = document.querySelector('.product-backdrop');
  if (backdropElement) {
    backdropElement.textContent = app.backdrop;
  }
  
  // Update product image
  const productImageElement = document.querySelector('.product-model-app img');
  if (productImageElement) {
    productImageElement.setAttribute('src', app.modelImage);
    productImageElement.setAttribute('alt', app.name);
  }
  
  // Update bottom info
  const infoElements = document.querySelectorAll('.bottom-info .info-item');
  if (infoElements.length === app.info.length) {
    infoElements.forEach((element, i) => {
      element.textContent = app.info[i];
    });
  }
}

// Export functions for potential use in React components
export { initGalleryFunctionality, updateAppDisplay, appList };
