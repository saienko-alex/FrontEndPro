class StickerBoardController {
    #collection = null;
    #sctickerBoardView = null;
    #headerView = null;

    constructor(container) {
        this.#headerView = new Header({});
        container.append(this.#headerView.el)

        this. #sctickerBoardView = new StickerBoard({
            onDelete: (id) => this.deleteSticker(id),
            onUpdate: (id, values) => this.updateSticker(id, values),
        });
        container.append(this.#sctickerBoardView.el)



        this.#collection = new StickerBoardCollection();
        this.#collection.fetchList().then(() => {
            this.#sctickerBoardView.renderList(this.#collection.list)
        });   
    }
    deleteSticker(id) {
        this.#collection.deleteSticker(id).then(() => {
            this.#sctickerBoardView.renderList(this.#collection.list)
        });
    }
    updateSticker(id, values) {
        this.#collection.updateSticker(id, values).then(() => {
            this.#sctickerBoardView.renderList(this.#collection.list)
        });
    }
}    