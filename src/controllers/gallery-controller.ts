
function onInit() {
    console.log('Initalizing gallery...')
    renderGallery()
}

function renderGallery() {
    const elGallery: HTMLElement | null = document.querySelector('.gallery')
    if (elGallery === null) return
    const templates: {
        _id: number
        url: string
        keywords: string[]
    }[] = getTemplates()
    const strHTMLs: string[] = templates.map(template => {
        return `
        <div class="template-img-container">
        <img onclick="onSetTemplate(+${template._id})" class="template-img" src="${template.url}" alt="${template.keywords[0]}" title="${template.keywords[0]}" />
        </div>
        `
    })
    elGallery.innerHTML = strHTMLs.join('')
}

function onSetTemplate(templateId:number) {
    setTemplate(templateId)
    onSetEditorHidden(false)
}
