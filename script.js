document.addEventListener('DOMContentLoaded', function() {
    var viewAlbumButtons = document.getElementsByClassName('view-album');
    var lightbox = document.getElementById('lightbox');
    var lightboxClose = document.getElementById('lightbox-close');
    var lightboxImage = document.getElementById('lightbox-image');
    var lightboxArrowLeft = document.getElementById('lightbox-arrow-left');
    var lightboxArrowRight = document.getElementById('lightbox-arrow-right');
    var currentIndex = 0;
    var images = [];
  
    function openLightbox(index) {
      if (index >= 0 && index < images.length) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex];
        lightbox.classList.remove('hidden');
        updateImageList();
      }
    }
  
    function closeLightbox() {
      lightbox.classList.add('hidden');
    }
  
    function navigateLeft() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1;
      }
      lightboxImage.src = images[currentIndex];
      updateImageList();
    }
  
    function navigateRight() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      lightboxImage.src = images[currentIndex];
      updateImageList();
    }
  
    function addImageToLightbox(imageUrl) {
      var img = new Image();
      img.onload = function() {
        images.push(imageUrl);
      };
      img.onerror = function() {
        // Do nothing if the image URL doesn't exist
      };
      img.src = imageUrl;
    }
  
    function updateImageList() {
      var imageListContainer = document.getElementById('lightbox-image-list');
      imageListContainer.innerHTML = '';
  
      var startIndex = Math.max(0, currentIndex - 5);
      var endIndex = Math.min(images.length - 1, currentIndex + 5);
  
      for (var i = startIndex; i <= endIndex; i++) {
        var image = document.createElement('img');
        image.src = images[i];
        image.classList.add('lightbox-image-list-item');
        if (i === currentIndex) {
          image.classList.add('current-image');
        }
        image.addEventListener('click', function() {
          var index = parseInt(this.getAttribute('data-index'));
          navigateToImage(index);
        });
        image.setAttribute('data-index', i);
        imageListContainer.appendChild(image);
      }
    }
  
    function navigateToImage(index) {
      currentIndex = index;
      lightboxImage.src = images[currentIndex];
      updateImageList();
    }
  
    Array.from(viewAlbumButtons).forEach(function(button) {
      button.addEventListener('click', function() {
        var directory = this.getAttribute('data-directory');
        var imageUrls = [
            directory + '/cover.jpg',   // First image
            directory + '/image1.jpg',  // Additional images
            directory + '/image2.jpg',
            directory + '/image3.jpg',
            directory + '/image4.jpg',
            directory + '/image5.jpg',
            directory + '/image6.jpg',
            directory + '/image7.jpg',
            directory + '/image8.jpg',
            directory + '/image9.jpg',
            directory + '/image10.jpg',
            directory + '/image11.jpg',
            directory + '/image12.jpg',
            directory + '/image13.jpg',
            directory + '/image14.jpg',
            directory + '/image15.jpg',
            directory + '/image16.jpg',
            directory + '/image17.jpg',
            directory + '/image18.jpg',
            directory + '/image19.jpg',
            directory + '/image20.jpg',
            directory + '/image21.jpg',
            directory + '/image22.jpg',
            directory + '/image23.jpg',
            directory + '/image24.jpg',
            directory + '/image25.jpg',
            directory + '/image26.jpg',
            directory + '/image27.jpg',
            directory + '/image28.jpg',
            directory + '/image29.jpg',
            directory + '/image30.jpg',
            directory + '/image31.jpg',
            directory + '/image32.jpg',
            directory + '/image33.jpg',
            directory + '/image34.jpg',
            directory + '/image35.jpg',
            directory + '/image36.jpg',
            directory + '/image37.jpg',
            directory + '/image38.jpg',
            directory + '/image39.jpg',
            directory + '/image40.jpg',
            directory + '/image41.jpg',
            directory + '/image42.jpg',
            directory + '/image43.jpg',
            directory + '/image44.jpg',
            directory + '/image45.jpg',
            directory + '/image46.jpg',
            directory + '/image47.jpg',
            directory + '/image48.jpg',
            directory + '/image49.jpg',
            directory + '/image50.jpg',
            directory + '/image51.jpg',
            directory + '/image52.jpg',
            directory + '/image53.jpg',
            directory + '/image54.jpg',
            directory + '/image55.jpg',
            directory + '/image56.jpg',
            directory + '/image57.jpg',
            directory + '/image58.jpg',
            directory + '/image59.jpg',
            directory + '/image60.jpg',
            directory + '/image61.jpg',
            directory + '/image62.jpg',
            directory + '/image63.jpg',
            directory + '/image64.jpg',
            directory + '/image65.jpg',
            directory + '/image66.jpg',
            directory + '/image67.jpg',
            directory + '/image68.jpg',
            directory + '/image69.jpg',
            directory + '/image70.jpg',
            directory + '/image71.jpg',
            directory + '/image72.jpg',
            directory + '/image73.jpg',
            directory + '/image74.jpg',
            directory + '/image75.jpg',
            directory + '/image76.jpg',
            directory + '/image77.jpg',
            directory + '/image78.jpg',
            directory + '/image79.jpg',
            directory + '/image80.jpg',
            directory + '/image81.jpg',
            directory + '/image82.jpg',
            directory + '/image83.jpg',
            directory + '/image84.jpg',
            directory + '/image85.jpg',
            directory + '/image86.jpg',
            directory + '/image87.jpg',
            directory + '/image88.jpg',
            directory + '/image89.jpg',
            directory + '/image90.jpg',
            directory + '/image91.jpg',
            directory + '/image92.jpg',
            directory + '/image93.jpg',
            directory + '/image94.jpg',
            directory + '/image95.jpg',
            directory + '/image96.jpg',
            directory + '/image97.jpg',
            directory + '/image98.jpg',
            directory + '/image99.jpg',
            directory + '/image100.jpg'
        ];
  
        images = []; // Clear the images array
  
        var loadedImages = 0;
  
        function checkAllImagesLoaded() {
          loadedImages++;
          if (loadedImages === imageUrls.length) {
            console.log("Images loaded: " + images.length);
            openLightbox(0); // Open the lightbox with the first image
          }
        }
  
        imageUrls.forEach(function(imageUrl) {
          var img = new Image();
          img.onload = checkAllImagesLoaded;
          img.onerror = checkAllImagesLoaded;
          img.src = imageUrl;
          addImageToLightbox(imageUrl);
        });
      });
    });
  
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxArrowLeft.addEventListener('click', navigateLeft);
    lightboxArrowRight.addEventListener('click', navigateRight);
  });
  