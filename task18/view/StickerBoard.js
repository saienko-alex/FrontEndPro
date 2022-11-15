class StickerBoard {
    #config = null;
    el = null


    static stickerITemTemplate = `
    //     <div class="sticker-block">
    //         <div class="header-block">
    //             <button type="button" class="close-button">X</button>
    //         </div>
    //         <textarea>
    //         </textarea>
    //     </div> 
    //     `;

    static htmlToElement(html) {
        const container = document.createElement('div');

        container.innerHTML = html;

        return container.children[0];   
    } 

    constructor(config) {
        this.#config = config;
        this.#initView();

    }

    #initView() {

        this.el = StickerBoard.htmlToElement(StickerBoard.stickerITemTemplate);

        // this.addButtonEl.addEventListener('click', () => {
        //     console.log('hello')
        // });   

    }
}



// class StickerBoard {
//     // el = null;
//     static stickerITemTemplate = `
//     <div class="sticker-block">
//         <div class="header-block">
//             <button type="button" class="close-button">X</button>
//         </div>
//         <textarea>
//         </textarea>
//     </div> 
//     `;

//     static htmlToElement(html) {
//         const container = document.createElement('div');
    
//         container.innerHTML = html;
    
//         return container.children[0];   
//     }

//     #config = null;
//     addButtonEl = document.querySelector('#addBtn');
    
//     constructor(config) {
//         this.initStickerBoard();
//         this.#config = config;
        
        
//     }
//     initStickerBoard() {
//         this.el = StickerBoard.htmlToElement(StickerBoard.stickerITemTemplate);

//         this.addButtonEl.addEventListener('click', () => {
//             return this.addSticker()
//         });
//     } 

//     addSticker() {
//         this.#config.onAddSticker()
//     }

// } 