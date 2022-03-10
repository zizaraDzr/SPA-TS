import Page from "../../core/templates/page"

class Dashboard extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <iframe src="https://www.bingosoft.ru" style="width: 100%; height: 100%" align="left"></iframe>
            `;
      }
}
export default Dashboard