
function onInit() {
    renderGallery()
}

function renderGallery() {
    const elGallery: HTMLElement | null = document.querySelector('.gallery')
    if (elGallery === null) return
    const templates: Template[] = getTemplates()
    const strHTMLs: string[] = templates.map(template => {
        return `
        <div class="template-img-container">
        <img id="${template._id}" onclick="onSetTemplate('${template._id}')" class="template-img" src="${template.url}" alt="${template.keywords[0]}" title="${template.keywords[0]}" />
        </div>
        `
    })
    elGallery.innerHTML = strHTMLs.join('')
}

function onSetTemplate(templateId:string) {
    setTemplate(templateId)
    onSetEditorHidden(true)
    onSetCanvas()
}
