import { initTabs } from './tabs'
import {initExpandable} from './expandable';
import {initDialog} from "./dialog";
import {initSwiper} from "./swiper";
import {initMenu} from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs()
    initExpandable();
    initDialog()
    initSwiper()
    initMenu()
})
