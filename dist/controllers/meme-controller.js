"use strict";
const gElCanvas = document.getElementById('canvas');
let gCtx;
function onAddLine() {
    addLine();
    switchLine();
    renderCanvas();
}
function onSwitchLine() {
    switchLine();
    renderCanvas();
}
function onSetColor(color) {
    setColor(color);
    renderCanvas();
}
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
    const currLineIdx = getCurrLineIdx();
    meme.lines.forEach((line, idx) => {
        if (idx === currLineIdx)
            renderRect(line);
        renderLine(line);
    });
}
function renderLine(line) {
    if (!gCtx)
        return console.log('Cannot render canvas');
    const { color, strokeColor, font, size, align, txt, pos } = line;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = color;
    gCtx.font = `${size}px ${font}`;
    gCtx.textAlign = align;
    gCtx.textBaseline = 'middle';
    gCtx.fillText(txt, pos.x, pos.y);
    gCtx.strokeText(txt, pos.x, pos.y);
}
function renderRect(line) {
    if (!gCtx)
        return console.log('Cannot render canvas');
    const { pos, size, txt, strokeColor } = line;
    const { x, y } = pos;
    const txtLength = txt.length * size;
    gCtx.beginPath();
    gCtx.rect(x - txtLength / 2, y - size / 1.5, txtLength, size + 4);
    gCtx.strokeStyle = strokeColor;
    gCtx.stroke();
}
function setCanvasContext(ctx) {
    gCtx = ctx;
}
function resizeElCanvas(elTemplateImg) {
    gElCanvas.width = elTemplateImg.width;
    gElCanvas.height = elTemplateImg.height;
}
