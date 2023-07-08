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
        directory + '/cover.JPG',  
        directory + '/image1.JPG',  
        directory + '/image2.JPG',
        directory + '/image3.JPG',
        directory + '/image4.JPG',
        directory + '/image5.JPG',
        directory + '/image6.JPG',
        directory + '/image7.JPG',
        directory + '/image8.JPG',
        directory + '/image9.JPG',
        directory + '/image10.JPG',
        directory + '/image11.JPG',
        directory + '/image12.JPG',
        directory + '/image13.JPG',
        directory + '/image14.JPG',
        directory + '/image15.JPG',
        directory + '/image16.JPG',
        directory + '/image17.JPG',
        directory + '/image18.JPG',
        directory + '/image19.JPG',
        directory + '/image20.JPG',
        directory + '/image21.JPG',
        directory + '/image22.JPG',
        directory + '/image23.JPG',
        directory + '/image24.JPG',
        directory + '/image25.JPG',
        directory + '/image26.JPG',
        directory + '/image27.JPG',
        directory + '/image28.JPG',
        directory + '/image29.JPG',
        directory + '/image30.JPG',
        directory + '/image31.JPG',
        directory + '/image32.JPG',
        directory + '/image33.JPG',
        directory + '/image34.JPG',
        directory + '/image35.JPG',
        directory + '/image36.JPG',
        directory + '/image37.JPG',
        directory + '/image38.JPG',
        directory + '/image39.JPG',
        directory + '/image40.JPG',
        directory + '/image41.JPG',
        directory + '/image42.JPG',
        directory + '/image43.JPG',
        directory + '/image44.JPG',
        directory + '/image45.JPG',
        directory + '/image46.JPG',
        directory + '/image47.JPG',
        directory + '/image48.JPG',
        directory + '/image49.JPG',
        directory + '/image50.JPG',
        directory + '/image51.JPG',
        directory + '/image52.JPG',
        directory + '/image53.JPG',
        directory + '/image54.JPG',
        directory + '/image55.JPG',
        directory + '/image56.JPG',
        directory + '/image57.JPG',
        directory + '/image58.JPG',
        directory + '/image59.JPG',
        directory + '/image60.JPG',
        directory + '/image61.JPG',
        directory + '/image62.JPG',
        directory + '/image63.JPG',
        directory + '/image64.JPG',
        directory + '/image65.JPG',
        directory + '/image66.JPG',
        directory + '/image67.JPG',
        directory + '/image68.JPG',
        directory + '/image69.JPG',
        directory + '/image70.JPG',
        directory + '/image71.JPG',
        directory + '/image72.JPG',
        directory + '/image73.JPG',
        directory + '/image74.JPG',
        directory + '/image75.JPG',
        directory + '/image76.JPG',
        directory + '/image77.JPG',
        directory + '/image78.JPG',
        directory + '/image79.JPG',
        directory + '/image80.JPG',
        directory + '/image81.JPG',
        directory + '/image82.JPG',
        directory + '/image83.JPG',
        directory + '/image84.JPG',
        directory + '/image85.JPG',
        directory + '/image86.JPG',
        directory + '/image87.JPG',
        directory + '/image88.JPG',
        directory + '/image89.JPG',
        directory + '/image90.JPG',
        directory + '/image91.JPG',
        directory + '/image92.JPG',
        directory + '/image93.JPG',
        directory + '/image94.JPG',
        directory + '/image95.JPG',
        directory + '/image96.JPG',
        directory + '/image97.JPG',
        directory + '/image98.JPG',
        directory + '/image99.JPG',
        directory + '/image100.JPG',
        directory + '/image101.JPG',
        directory + '/image102.JPG',
        directory + '/image103.JPG',
        directory + '/image104.JPG',
        directory + '/image105.JPG',
        directory + '/image106.JPG',
        directory + '/image107.JPG',
        directory + '/image108.JPG',
        directory + '/image109.JPG',
        directory + '/image110.JPG',
        directory + '/image111.JPG',
        directory + '/image112.JPG',
        directory + '/image113.JPG',
        directory + '/image114.JPG',
        directory + '/image115.JPG',
        directory + '/image116.JPG',
        directory + '/image117.JPG',
        directory + '/image118.JPG',
        directory + '/image119.JPG',
        directory + '/image120.JPG',
        directory + '/image121.JPG',
        directory + '/image122.JPG',
        directory + '/image123.JPG',
        directory + '/image124.JPG',
        directory + '/image125.JPG',
        directory + '/image126.JPG',
        directory + '/image127.JPG',
        directory + '/image128.JPG',
        directory + '/image129.JPG',
        directory + '/image130.JPG',
        directory + '/image131.JPG',
        directory + '/image132.JPG',
        directory + '/image133.JPG',
        directory + '/image134.JPG',
        directory + '/image135.JPG',
        directory + '/image136.JPG',
        directory + '/image137.JPG',
        directory + '/image138.JPG',
        directory + '/image139.JPG',
        directory + '/image140.JPG',
        directory + '/image141.JPG',
        directory + '/image142.JPG',
        directory + '/image143.JPG',
        directory + '/image144.JPG',
        directory + '/image145.JPG',
        directory + '/image146.JPG',
        directory + '/image147.JPG',
        directory + '/image148.JPG',
        directory + '/image149.JPG',
        directory + '/image150.JPG',
        ];
  
        images = []; 
  
        var loadedImages = 0;
  
        function checkAllImagesLoaded() {
          loadedImages++;
          if (loadedImages === imageUrls.length) {
            console.log("Images loaded: " + images.length);
            openLightbox(0); 
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
  
