import Page from "../../core/templates/page"

class Main extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("MainPage")
    }

    render(title: string) {
        const template = document.createElement('h1')
        template.textContent = title
        this.container.append(template)
        return this.container
    }
}
export default Main