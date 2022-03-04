import Page from "../../core/templates/page"

class Dashboard extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h1>Dasboard asdasd asd as da sd a da d s d</h1>
            <a href="/editor" data-link>Editor</a>
            `;
      }
}
export default Dashboard