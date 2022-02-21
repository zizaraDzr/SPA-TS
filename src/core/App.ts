import Menu from "../Menu/Menu"
import Dashboard from "../pages/dashboard/dashboardPage"
import Main from "../pages/main/mainPage"
import Page from "./templates/page"

import { StringArray } from '../core/types/type'
class App {
    private container = document.querySelector('#app') as HTMLElement
    // private initialPage: Main
    private renderNewPage(idPage: string) {
        // document.body.innerHTML = ''
        let page: Page | null = null

        if (idPage === 'main-page') {
            page = new Main('main-page')
        }
        if (idPage === 'dashboard-page') {
            page = new Dashboard('dashboard-page')
        }

        if (page) {
            const pageHTML = page.render(idPage)
            this.container.append(pageHTML)
        }
        
    }
    private registerEvents() {
        window.addEventListener('hashchange', (event)=>{
            console.log('hashCgange', event)
        })
        const sidebar = document.querySelector('.sidebar') as HTMLElement
        sidebar.addEventListener('click', event => {
            let element = event.target as HTMLElement
            console.log(element)
            event.preventDefault();
            if (element.classList.contains('toggle') || element.classList.contains('bx-search') ) {
                sidebar.classList.toggle('close')
            }
            if (element.matches("[data-link]")) {
                event.preventDefault();
                console.log('click menu')
              }
            
        })
    }
    constructor ( menu:StringArray ) {
        this.init(menu)
    }

    init(menu:StringArray) {
        document.body.innerHTML = Menu.render(menu)
        this.renderNewPage('main-page')
        this.registerEvents()
    }
}
export default App