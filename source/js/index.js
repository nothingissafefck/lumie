import { initTabs } from './tabs'
import {initExpandable} from './expandable';
import {initDialog} from "./dialog";
import {initSwiper} from "./swiper";

document.addEventListener('DOMContentLoaded', () => {
    initTabs()
    initExpandable();
    initDialog()
    initSwiper()
})
