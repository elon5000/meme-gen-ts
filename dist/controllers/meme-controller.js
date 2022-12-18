"use strict";
function onSetCanvas() {
    const elCanvas = document.getElementById('canvas');
    const elTemplateImg = document.getElementById(getCurrTemplateId());
    const context = elCanvas.getContext('2d');
    setCanvasContext(context);
    renderCanvasTemplate(elTemplateImg);
}
function onSetEditorHidden(isOpen) {
    const elEditorWarpper = document.querySelector('.editor-warpper');
    isOpen ? elEditorWarpper.classList.remove('hidden') : elEditorWarpper.classList.add('hidden');
}
function renderCanvasTemplate(elTemplateImg) {
    console.log('Hello from render', elTemplateImg);
}
