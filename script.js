// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Only run on gallery page or pages with .event-image inside .events-grid
    const galleryImages = document.querySelectorAll('.events-grid .event-image');
    
    if (galleryImages.length === 0) return;

    // Create Lightbox Elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    
    const lightboxContent = document.createElement('img');
    lightboxContent.className = 'lightbox-content';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    
    lightbox.appendChild(lightboxContent);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Open Lightbox
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
             // Extract URL from background-image style: url("...")
            const style = window.getComputedStyle(image);
            let bgImage = style.backgroundImage;
            
            // Cleanup url("...") string to get just the path
            bgImage = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            
            lightboxContent.src = bgImage;
            lightbox.style.display = 'flex';
        });
    });

    // Close Lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
