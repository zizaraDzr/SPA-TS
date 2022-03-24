import './styles/main.css'
import App from "./core/App";

import { IStringArray } from './core/types/type'
let locationPathname = window.location.pathname
console.log(locationPathname);
let idUrl = locationPathname === '/SPA-TS/' ? '/SPA-TS/' : '/'
const menuItems:IStringArray = [
    {id: `${idUrl}`, name: 'Главная'},
    {id: `${idUrl}dashboard`, name: 'dashboard'},
    {id: `${idUrl}editor`, name: 'editor'}
]

new App(menuItems)
// console.log(hello)
