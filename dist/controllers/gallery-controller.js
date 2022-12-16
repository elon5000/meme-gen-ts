"use strict";
function onInit() {
    console.log('Initalizing gallery...');
    renderGallery();
}
function renderGallery() {
    const elGallery = document.querySelector('.gallery');
    if (elGallery === null)
        return;
    const templates = getTemplates();
    const strHTMLs = templates.map(template => {
        return `
        <div class="template-img-container">
        <img onclick="onSetTemplate(+${template._id})" class="template-img" src="${template.url}" alt="${template.keywords[0]}" title="${template.keywords[0]}" />
        </div>
        `;
    });
    elGallery.innerHTML = strHTMLs.join('');
}
function onSetTemplate(templateId) {
    setTemplate(templateId);
    onSetEditorHidden(false);
}
