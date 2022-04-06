import './styles/main.css'
import App from "./core/App";

import { IStringArray } from './core/types/type'
let locationPathname = window.location.pathname
// console.log(locationPathname);
// let idUrl = locationPathname === '/SPA-TS/' ? '/SPA-TS/' : '/'
let idUrl = locationPathname.replace(/[/SPATS/-]+/g, '')
console.log({idUrl})
const menuItems:IStringArray = [
    {id: `${idUrl || '/'}`, name: 'Главная'},
    {id: `${idUrl}/DragAndDrop`, name: 'Drag’n’Drop'},
    {id: `${idUrl}/WebComponents`, name: 'WebComponents'}
]

new App(menuItems)
// console.log(hello)
