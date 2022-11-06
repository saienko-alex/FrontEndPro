class Accordion {
    el = null;
   

    constructor(el) {
        this.el = el;

        this.#bindEventsListeners();
    }


    #bindEventsListeners() {
        this.el.addEventListener('click', (e) => {
            if(e.target.classList.contains('accordion-title')) {
                const index = this.#findIndex(e.target);
                this.toggleAccordion(index);
            }
            
        }); 
    }
    #findIndex(titleEl) {
        const titles = this.el.querySelectorAll('.accordion-title');

        for (let i = 0; i < titles.length; i++) {
            if (titles[i] === titleEl) {
                return i;
            }
        }
        return null;
    }   

    toggleAccordion(index) {
        const items = this.el.querySelectorAll('.accordion-body');

        items[index].classList.toggle('accordion-active');
     
    }
}


// class Accordion {
//     #el = null;
//     titlesEl = null;
//     bodiesEl = null;

//     constructor(el) {
//         this.#el = el;

//         this.buildMaket();
//         this.#bindEventsListeners();
//     }

//     buildMaket() {
//         this.#createContainers();
//         this.#moveTitles();
//         this.#moveBodies();
//     }

//     #createContainers() {
//         this.titlesEl = document.createElement('div');
//         this.titlesEl.classList.add('accordionset-titles');

//         this.bodiesEl = document.createElement('div');
//         this.bodiesEl.classList.add('accordionset-bodies');

//         this.#el.append(this.titlesEl);
//         this.#el.append(this.bodiesEl);
//     }
//     #moveTitles() {
//         const titles = this.#el.querySelectorAll('.accordion-title');
//         titles.forEach((title) => {
//             this.titlesEl.append(title);
//             title.classList.add('accordionset-title');
//         });
//     }

//     #moveBodies() {
//         const bodies = this.#el.querySelectorAll('.accordion-item');
//         bodies.forEach((body) => {
//             this.bodiesEl.append(body);
//             body.classList.add('accordionset-body');
//         });
//     }
//     #bindEventsListeners() {
//         this.titlesEl.addEventListener('click', (e) => {
//             if(e.target.classList.contains('accordionset-title')) {
//                 const index = this.#findIndex(e.target);
//                 this.toggleAccordion(index);
//             }
            
//         }); 
//     }
//     #findIndex(titleEl) {
//         for (let i = 0; i < this.titlesEl.children.length; i++) {
//             if (this.titlesEl.children[i] === titleEl) {
//                 return i;
//             }
//         }
//         return null;
//     }   
//     toggleAccordion(index) {

//         this.titlesEl.children[index].classList.toggle('accordionset-active');
//         this.bodiesEl.children[index].classList.toggle('accordionset-active');
//     }
// }