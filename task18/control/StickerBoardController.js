class StickerBoardController {
    #collection = null;
    #sctickerBoard = null;

    constructor(el) {
        console.log(el);

        this.#sctickerBoard= new StickerBoard({
            onAddSticker: () => this.addStickerBlock()
        });
        el.append(this.#sctickerBoard.el);
    }
    addStickerBlock() {
    }
}    