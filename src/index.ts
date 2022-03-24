import './styles/main.css'
import App from "./core/App";

import { IStringArray } from './core/types/type'
let locationPathname = window.location.pathname
console.log(locationPathname);
<<<<<<< HEAD
let idUrl = locationPathname === '/SPA-TS/' ? '/SPA-TS/' : '/'
const menuItems:IStringArray = [
    {id: `${idUrl}`, name: 'Главная'},
=======
let idUrl = locationPathname.replace(/[/SPATS/-]+/g, '')
const menuItems:IStringArray = [
    {id: `${idUrl}main`, name: 'Главная'},
>>>>>>> aadf6a62138870c88f343022fa1bbf36c745c159
    {id: `${idUrl}dashboard`, name: 'dashboard'},
    {id: `${idUrl}editor`, name: 'editor'}
]

new App(menuItems)
// console.log(hello)
