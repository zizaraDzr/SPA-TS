abstract class Page {
    protected container: HTMLElement;
    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }
    setTitle(title: string) {
        document.title = title;
      }

    render(title?: string) {
        return this.container
    }
}

export default Page