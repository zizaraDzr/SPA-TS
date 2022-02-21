import './styles/main.css'
import App from "./core/App";

import { StringArray } from './core/types/type'

const menuItems:StringArray = [
    {id: '/', name: 'Меню 1'},
    {id: 'dashboard', name: 'Меню 2'},
    {id: 'editor', name: 'Меню 3'}
]

const hello = new App(menuItems)
console.log(hello)
