import Page from "../../core/templates/page"

class Dashboard extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("DragAndDrop")
    }

    async getHtml() {
        return `
        <iframe src="https://zizaradzr.github.io/Web-Components-/" style="width: 100%; height: 100%" align="left"></iframe>
            `;
      }
}
export default Dashboard