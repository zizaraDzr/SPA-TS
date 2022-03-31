import Menu from '../Menu/Menu'
import Dashboard from '../pages/dashboard/dashboardPage'
import MainPage from '../pages/mainPage/mainPage'
import Main from '../pages/main/mainPage'
import Page from './templates/page'

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
    // не перезагружает страницу pushState
    window.history.pushState(null, 'null', href)
    console.log('navigateTo')
    this.route()
  }
  private async route() {
    let locationPathname = window.location.pathname
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log({locationPathname})
=======
    console.log({locationPathname});
>>>>>>> 74bd66a... test
=======
    console.log({locationPathname})
>>>>>>> bafa1f2... test3
=======
    console.log({locationPathname});
>>>>>>> 100471d... test33
=======
    console.log({locationPathname})
>>>>>>> 2728062... 50
=======
    console.log({locationPathname});
>>>>>>> c949f96... 51
=======
    console.log({locationPathname});
>>>>>>> b42c7aac7206fcbbf1aea4fa32edcebf1542860c
    let idUrl = locationPathname.replace(/[/SPATS/-]+/g, '')
    const routes = [
      {
        path: `/main`,
        view: MainPage,
      },
        {
          path: `/dashboard`,
          view: Dashboard
        },
        // {
        //   path: "/settings",
        //   view: Settings
        // },
    ]
    
    const potentialMathces = routes.map((item) => {
      return {
        route: item,
        isMatch: locationPathname === item.path,
      }
    })

    let match = potentialMathces.find((item) => item.isMatch)

    if (!match) {
      match = { route: routes[0], isMatch: true }
    }
    console.log({match})
    // this.navigateTo(href)
    const view = await new match.route.view('dashboard').getHtml()
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