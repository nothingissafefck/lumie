const tabs = document.querySelectorAll('[data-tab]')
const sections = document.querySelectorAll('[data-tabs-section]')

function selectTab({ target }) {
    const selectedSection = target.dataset.tab

    tabs.forEach((tab) => {
        tab.classList.toggle('products__selected-tab', tab.dataset.tab === selectedSection)
    })
    sections.forEach((section) => {
        section.classList.toggle('visually-hidden', section.dataset.tabsSection !== selectedSection)
    })
}

export function initTabs() {
    tabs.forEach((tab) => {
        tab.addEventListener('click', selectTab)
    })
}
