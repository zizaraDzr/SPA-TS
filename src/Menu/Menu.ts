import './menu.css'
class Menu {

    constructor() {}

    static render(title: string[]): string {
         const menu = title.map(item => `
                <li class="nav-link">
                    <a href="#" >
                        <i class='bx bx-home-alt icon'></i>
                        <span class='text nav-text'>${item}</span>
                    </a>
                </li>`
        ).join('')

        return `
            <nav class='sidebar'>
                <header>
                    <div class="image-text">
                        <span class='image'>
                            <img src="https://miro.medium.com/max/1400/1*K-4RqDC6zFrpAG31ayDDOg.png" alt="logo">
                        </span>
                        <div class="text header-text">
                            <span class='name'>Красивый</span>
                            <span class='profession'>Заголовок</span>
                        </div>
                    </div>
                    <i class='bx bx-chevron-right toggle'></i>
                </header>
                <div class="menu-bar">
                    <div class="menu">
                        <li class="search-box">
                            <i class="bx bx-search icon"></i>
                            <input type="search" placeholder="Search...">
                        </li>
                        <ui class="menu-links">
                            ${menu}
                        </ui>
                    </div>
                </div>
            </nav>`
    }
}

export default Menu