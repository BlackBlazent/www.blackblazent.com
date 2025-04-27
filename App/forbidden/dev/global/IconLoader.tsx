// src/components/IconLoader.tsx
import React from 'react';

// Dynamically import all icons from the folder
const icons = import.meta.glob('../assets/_then_many_icons_image_folders/*.{png,svg,jpg,jpeg}', {
  eager: true, // Load them immediately during build
  import: 'default', // Import the default export for the images
});

interface IconLoaderProps {
  name: string;
}

const IconLoader: React.FC<IconLoaderProps> = ({ name }) => {
  // Access the icon dynamically by its filename
  const iconSrc = icons[`../assets/_then_many_icons_image_folders/${name}`];

  if (!iconSrc) {
    return <span>Icon not found</span>;
  }

  return <img src={iconSrc} alt={name} />;
};

export default IconLoader;
