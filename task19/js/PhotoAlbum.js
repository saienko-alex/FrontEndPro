class PhotoAlbum {
    $API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
    $photoList = [];
    $listEl = document.querySelector('#list');

    static photoITemTemplate = `
    <div data-contact-id="{{id}}" class="img-block">
        <p> {{title}}</p>
        <img src="{{url}}" width ="200" height = "200" alt>
        <img src="{{surl}}" width ="100" height = "100" alt>
    <div>  
    `;

    static generatePhotoAlbumHtml(photoListEl) {
        return PhotoAlbum.photoITemTemplate
        .replaceAll('{{id}}', photoListEl.id)
        .replaceAll('{{url}}', photoListEl.url)
        .replaceAll('{{surl}}', photoListEl.thumbnailUrl)
        .replaceAll('{{title}}', photoListEl.title);
        
    }
    
    constructor() {
        this.initPhoto();  
    }
    
    initPhoto() {
        this.fetchPhotoAlbum();
    }

    fetchPhotoAlbum() {
        fetch(this.$API_URL)
        .then((res) => res.json())
        .then((value) => {
            this.$photoList = value
            this.renderPhotoAlbum(this.$photoList)
        });
    }

    renderPhotoAlbum() {
        this.$listEl.innerHTML = this.$photoList
        .map(PhotoAlbum.generatePhotoAlbumHtml)
        .join('');  

        
    // renderPhotoAlbum(photolist) {
    //     this.$listEl.html(photolist.map(PhotoAlbum.generatePhotoAlbumHtml).join(''));  
    // }

    }
}
