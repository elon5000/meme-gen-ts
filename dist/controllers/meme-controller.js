"use strict";
const gElCanvas = document.getElementById('canvas');
let gCtx;
function onSetCanvas() {
    const context = gElCanvas.getContext('2d');
    setCanvasContext(context);
    renderCanvas();
}
function onSetEditorHidden(isOpen) {
    const elEditorWarpper = document.querySelector('.editor-warpper');
    isOpen ? elEditorWarpper.classList.remove('hidden') : elEditorWarpper.classList.add('hidden');
}
function renderCanvas() {
    const elTemplateImg = document.getElementById(getCurrTemplateId());
    renderCanvasTemplate(elTemplateImg);
}
function renderCanvasTemplate(elTemplateImg) {
    gCtx === null || gCtx === void 0 ? void 0 : gCtx.drawImage(elTemplateImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
function setCanvasContext(ctx) {
    gCtx = ctx;
}
