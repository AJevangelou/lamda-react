import { useEffect, useState } from 'react';

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve();
    };
    img.onerror = img.onabort = function() {
      reject(src);
    };
    img.src = src;
  });
}

function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function preloadImages() {
      try {
        const promises = imageList.map(src => preloadImage(src));
        await Promise.all(promises);
        if (!isCancelled) {
          setImagesPreloaded(true);
        }
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    }

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return imagesPreloaded;
}

export default useImagePreloader;
