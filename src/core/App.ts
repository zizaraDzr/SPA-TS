import Menu from '../Menu/Menu'
import MainPage from '../pages/mainPage/mainPage'

import DragAndDrop from '../pages/DragAndDrop/DragAndDrop'
import WebComponents from '../pages/WebComponents/WebComponents'

import { IStringArray } from '../core/types/type'
class App {
  constructor(menu: IStringArray) {
    // событие нажатие на стрелки назад вперед
    // Событие popstate вызывается, когда изменяется активная
    // запись истории. Если
    // изменение записи истории было вызвано методом history.pushState()
    this.init(menu)
  }

  init(menu: IStringArray) {
    let container = document.querySelector('#app') as HTMLElement
    container.insertAdjacentHTML('afterbegin', Menu.render(menu))

    const createDiv = document.createElement('div')
    createDiv.classList.add('main')
    this.container.append(createDiv)

    window.addEventListener('popstate', this.route)
    this.route()
    this.registerEvents()
  }
  private container = document.querySelector('#app') as HTMLElement
  private navigateTo(href: string) {
    let locationPathname = window.location.pathname.includes('/SPA-TS/')
    // не перезагружает страницу pushState
    window.history.pushState(null, 'null', `/SPA-TS/${href}`)
    console.log('navigateTo')
    this.route()
  }
  private async route() {
    let locationPathname = window.location.pathname
    // console.log({locationPathname});
    // let idUrl = locationPathname.replace(/[/SPATS/-]+/g, '')
    let idUrl = locationPathname.slice(8)
    console.log({idUrl});
    console.log({locationPathname})
    const routes = [
      {
        path: `/`,
        view: MainPage,
      },
      {
        path: `/DragAndDrop`,
        view: DragAndDrop
      },
      {
        path: `/WebComponents`,
        view: WebComponents
      }
    ]
    
    const potentialMathces = routes.map((item) => {
      return {
        route: item,
        isMatch: idUrl === item.path,
      }
    })
    console.log({potentialMathces})
    let match = potentialMathces.find((item) => item.isMatch)

    if (!match) {
      match = { route: routes[0], isMatch: true }
    }
    const view = await new match.route.view(match.route.path).getHtml()
    let mainBlock = document.querySelector('.main') as HTMLElement
    mainBlock.innerHTML = ''
    mainBlock.insertAdjacentHTML('afterbegin', view)
  }

  private registerEvents() {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar) {
      sidebar.addEventListener('click', event => {
          let element = event.target as HTMLElement
          event.preventDefault()
          if (
            element.classList.contains('toggle') ||
            element.classList.contains('bx-search')
          ) {
            sidebar.classList.toggle('close')
          }
          if (element.closest('[data-link]')) {
            let href = element.closest('[data-link]')?.getAttribute('href')
            if (href) this.navigateTo(href)
          }
        },
        true
      )
    }
  }
}
export default App