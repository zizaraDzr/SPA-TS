import './styles/main.css'
import App from "./core/App";

import { IStringArray } from './core/types/type'

const menuItems:IStringArray = [
    {id: '/', name: 'Главная'},
    {id: 'dashboard', name: 'dashboard'},
    {id: 'editor', name: 'editor'}
]

new App(menuItems)
// console.log(hello)
