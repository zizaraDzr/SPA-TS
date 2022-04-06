import Page from "../../core/templates/page"

class Dashboard extends Page {
    constructor(id: string) {
        super(id)
        this.setTitle("DragAndDrop")
    }

    async getHtml() {
        return `
        <div>DragAndDrop</div>
            `;
      }
}
export default Dashboard