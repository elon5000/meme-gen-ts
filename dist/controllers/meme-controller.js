"use strict";
const gElCanvas = document.getElementById('canvas');
let gCtx;
function onSetCanvas() {
    resetMeme();
    const context = gElCanvas.getContext('2d');
    setCanvasContext(context);
    renderCanvas();
}
function onSetCurrTextLine(text) {
    setCurrTextLine(text);
    renderCanvas();
}
function onSetEditorHidden(isOpen) {
    const elEditorWarpper = document.querySelector('.editor-warpper');
    isOpen ? elEditorWarpper.classList.remove('hidden') : elEditorWarpper.classList.add('hidden');
}
function renderCanvas() {
    const elTemplateImg = document.getElementById(getCurrTemplateId());
    resizeElCanvas(elTemplateImg);
    renderCanvasTemplate(elTemplateImg);
    renderCanvasLines();
}
function renderCanvasTemplate(elTemplateImg) {
    gCtx === null || gCtx === void 0 ? void 0 : gCtx.drawImage(elTemplateImg, 0, 0, gElCanvas.width, gElCanvas.height);
}
function renderCanvasLines() {
    const meme = getMeme();
    meme.lines.forEach(line => renderLine(line));
}
function renderLine(line) {
    if (!gCtx)
        return console.log('Cannot render canvas');
    const { color, font, size, align, txt } = line;
    console.log('txt:', txt);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = color;
    gCtx.fillStyle = 'black';
    gCtx.font = `${size}px ${font}`;
    gCtx.textAlign = align;
    gCtx.textBaseline = 'middle';
    gCtx.fillText(txt, 100, 100);
    gCtx.strokeText(txt, 100, 100);
}
function setCanvasContext(ctx) {
    gCtx = ctx;
}
function resizeElCanvas(elTemplateImg) {
    gElCanvas.width = elTemplateImg.width;
    gElCanvas.height = elTemplateImg.height;
}
