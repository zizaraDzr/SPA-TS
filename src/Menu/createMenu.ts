export default function getHtml (item: string[]){

    const items = item.map(item => `<div>${item}</div>`).join('')
    return `
        <div class="menu">Заголовок
            ${items}
        </div>
    `
}