document.addEventListener('DOMContentLoaded', () => {
  console.log("Cool Pics site loaded!");

  const gallery = document.querySelector('.gallery');
  const viewer = document.getElementById('imageViewer');

 
  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    
    const smallSrc = clickedImg.getAttribute('src'); 
    const baseName = smallSrc.split('-')[0]; 
    const largeSrc = `${baseName}-full.jpeg`; 

    // Create image and close button
    const largeImg = document.createElement('img');
    largeImg.src = largeSrc;
    largeImg.alt = clickedImg.alt;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-viewer';
    closeBtn.textContent = 'X';

    // Show in modal
    viewer.innerHTML = '';
    viewer.appendChild(largeImg);
    viewer.appendChild(closeBtn);
    viewer.showModal();
  });

  
  viewer.addEventListener('click', (event) => {
    if (event.target.classList.contains('close-viewer')) {
      viewer.close();
    }

    
    if (event.target === viewer) {
      viewer.close();
    }
  });
});
