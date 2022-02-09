import getHtml from './createMenu';
import './menu.css'
class Menu {

    constructor() {}

    static render(title: string[]): string {
         const menu = title.map(item => `
                <div>${item}</div>`
        ).join('')
        // const  = document.createElement('div')
        // div.indivnerText(items)
        // console.log(div)
        // return div

        return `
            <div class="menu">Заголовок
                ${menu}
            </div>
        `
    }
}

export default Menu