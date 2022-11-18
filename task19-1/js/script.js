
    $API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
    $photoList = [];
    $listEl = $('.body');

    $photoITemTemplate = `
    <div class="h-smart-thumnail">
	    <ul>
		   <li><img src="{{url}}"></li>
	    </ul>
    </div>
    `;

    initPhoto();  
    
    function initPhoto() {
        fetchPhotoAlbum();
    }

    function fetchPhotoAlbum() {
        fetch(this.$API_URL)
        .then((res) => res.json())
        .then((value) => {
            $photoList = value
            renderPhotoAlbum($photoList)
        });
    }
   
    function renderPhotoAlbum(photolist) {
        const $values = $(photolist.map(generatePhotoAlbumHtml).join('')); 
        $listEl.append($values);  
        $('.h-smart-thumnail').hSmartThumbnail();

    }

    
    function generatePhotoAlbumHtml(photoListEl) {
        return $photoITemTemplate
        .replaceAll('{{url}}', photoListEl.url) 
    }
 







