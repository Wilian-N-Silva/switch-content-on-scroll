const solutionsList = document.querySelector('.solutions-list')
const solutionsListItems = solutionsList.querySelectorAll(
    '.solutions-list-item'
)

const featuresSideImage = document.querySelector(
    '.solutions-side-image-container img'
)

const viewportSize = window.screen.availHeight / 2

const init = () => {
    featuresSideImage.src = solutionsListItems[0].querySelector(
        '.solutions-list-item-image img'
    ).src

    window.addEventListener('scroll', (ev) => {
        solutionsListItems.forEach((item, idx) => {
            const itemContent = item.querySelector('.solutions-list-item-content')
            const difference = itemContent.getBoundingClientRect().top

            if (difference >= 0 && difference < viewportSize) {
                featuresSideImage.src = item.querySelector(
                    '.solutions-list-item-image img'
                ).src
            }
        })
    })
}

init()