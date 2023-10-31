const containers = document.querySelectorAll('[data-expandable-container]')

export function initExpandable() {
    containers.forEach((container) => {
        const expandables = container.querySelectorAll('[data-expandable]')

        container.addEventListener('click', ({ target }) => {
            if (target.dataset.expandableButton != null) {
                expandables.forEach((expandable) => expandable.classList.remove('is-expanded'))
                target.closest('[data-expandable]').classList.add('is-expanded')
            }
        })
    })
    // const buttons = document.querySelectorAll('[data-expandable-button]');
    //
    // buttons.forEach((button) => {
    //     button.addEventListener('click', ({target}) => {
    //         const container = target.closest('[data-expandable]');
    //
    //         if (container) {
    //             container.classList.toggle('is-expanded');
    //         }
    //     });
    // });
}
