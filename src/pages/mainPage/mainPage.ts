import Page from "../../core/templates/page"

class MainPage extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <div>hello world</div>
            `;
      }
}
export default MainPage