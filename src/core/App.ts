import Menu from "../Menu/Menu"
import Dashboard from "../pages/dashboard/dashboardPage"
import Main from "../pages/main/mainPage"
import Page from "./templates/page"
class App {
    private static container: HTMLElement = document.querySelector('#app') as HTMLElement
    private initialPage: Main
    static renderNewPage(idPage: string) {
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
    private router() {
        window.addEventListener('hashchange', (event)=>{
            console.log('hashCgange', event)
        })
    }
    constructor () {
        // this.container = document.querySelector('#app') as HTMLElement
        this.initialPage = new Main('main-page')
    }

    run() {
        // this.container.innerText = 'Hello TypeScript'
        document.body.innerHTML = Menu.render(['Меню1', 'Меню2', 'Меню3'])
        App.renderNewPage('main-page')
        this.router()
        // const initialPageMain = this.initialPage.render('Hello TypeScript')
        // this.container.append(initialPageMain)
    }
}
export default App