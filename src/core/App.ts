import Menu from '../Menu/Menu'
import Dashboard from '../pages/dashboard/dashboardPage'
import Main from '../pages/main/mainPage'
import Page from './templates/page'

import { IStringArray } from '../core/types/type'
class App {
  private container = document.querySelector('#app') as HTMLElement
  private navigateTo(href: string) {
    // не перезагружает страницу pushState
    window.history.pushState(null, 'null', href)
    console.log('navigateTo')
    this.route()
  }
  private async route() {
    const routes = [
      {
        path: '/dashboard',
        view: Dashboard,
      },
        // {
        //   path: "/editor",
        //   view: Editor
        // },
        // {
        //   path: "/settings",
        //   view: Settings
        // },
    ]

    const potentialMathces = routes.map((item) => {
      return {
        route: item,
        isMatch: window.location.pathname === item.path,
      }
    })

    let match = potentialMathces.find((item) => item.isMatch)

    if (!match) {
      match = { route: routes[0], isMatch: true }
    }
    console.log(match)
    const view = await new match.route.view('dashboard').getHtml()
    console.log(this.container)
    // this.container.insertAdjacentHTML('afterbegin', view)
    this.container.append(view)

    // document.querySelector('#app').innerHTML = await view.render()
  }
  private registerEvents() {
    const sidebar = document.querySelector('.sidebar')
    if (sidebar) {
      sidebar.addEventListener(
        'click',
        (event) => {
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
    window.addEventListener('popstate', this.route)
    // document.body.innerHTML = Menu.render(menu)
    // this.renderNewPage('main-page')
    this.registerEvents()
  }
}
export default App