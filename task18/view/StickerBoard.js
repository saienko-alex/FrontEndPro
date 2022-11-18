class StickerBoard {
    #config = null;
    el = null

    static CLASSES = {
        ITEMS: 'sticker-block',
        CLOSE: 'close-button',
        TEXTAREA: 'edit-control',

    };


    static iTemTemplate = `
    <div id = "mainform" class="mainform">
    `;


    static stickerITemTemplate = `
        <div class="sticker-block" data-sticker-id="{{id}}">
            <div class="header-block">
                <button type="button" class="close-button">X</button>
            </div>
            <textarea class="edit-control">{{description}}</textarea>
        </div> 
    `;

    static generateStickersHtml(sticker) {
        return interpolate(StickerBoard.stickerITemTemplate, sticker)

    }

    static htmlToElement(html) {
        const container = document.createElement('div');

        container.innerHTML = html;

        return container.children[0];   
    } 

    static getStickerId(el) {
        const parent = el.closest('.' + StickerBoard.CLASSES.ITEMS);

        return parent ? parent.dataset.stickerId : null; 
    }

    constructor(config) {
        this.#config = config;
        this.#initView();

    }

    #initView() {

        this.el = StickerBoard.htmlToElement(StickerBoard.iTemTemplate);


        this.el.addEventListener('click', (e) => {
            const stickerId = StickerBoard.getStickerId(e.target);

            switch (true) {
                case e.target.classList.contains(
                    StickerBoard.CLASSES.CLOSE
                ):
                    return this.deleteSticker(stickerId);
            
            }
        });
        this.el.addEventListener('change', (e) => {
            const stickerId = StickerBoard.getStickerId(e.target);
            switch (true) {
                case e.target.classList.contains(
                    StickerBoard.CLASSES.TEXTAREA
                ):
                    return this.changeSticker(stickerId, e.target.value);
            }        
        });

    }
    renderList(list) {
        this.el.innerHTML = list
            .map(StickerBoard.generateStickersHtml)
            .join('');
    }
    deleteSticker(id) {
        this.#config.onDelete(id);
    }
    changeSticker(id, value) {
        this.#config.onUpdate(id, { description: value });
    }

}

function interpolate (template, obj) {
    for (key in obj){
        template = template.replaceAll(`{{${key}}}`, obj[key])
    }
    return template;
}






