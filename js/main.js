import Modal from "./modal.js"
import { Cards } from './visits.js';
import Filter from "./filter.js";

export const headerBtn = document.querySelector('.header-btn')

const filter = document.querySelector('.filter')
filter.addEventListener('submit', (event) => {
    event.preventDefault()
    new Filter().makeFilter()
})

if (localStorage.getItem('token')) {
    headerBtn.textContent = 'Створити візит'
    new Cards().renderAll()
}

headerBtn.addEventListener('click', () => {
    if (headerBtn.textContent === "Вхід") {
        new Modal(document.body).enter()     
    } else{
        new Modal(document.body).visitCreateNew()
    }
})
