import Page from "../../core/templates/page"

class MainPage extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("Главная")
    }

    async getHtml() {
        return `
            <div>Hello world</div>
            `;
      }
}
export default MainPage