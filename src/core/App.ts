class App {
    private container: HTMLElement
    constructor () {
        this.container = document.querySelector('#app') as HTMLElement
    }

    run() {
        this.container.innerText = 'Hello TypeScript'
    }
}
export default App