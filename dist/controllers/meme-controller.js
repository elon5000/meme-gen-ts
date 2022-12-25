"use strict";
const gElCanvas = document.getElementById('canvas');
let gCtx;
let gIsExport = false;
function onAddLine() {
    addLine();
    onSwitchLine();
    renderCanvas();
}
function onSwitchLine() {
    switchLine();
    renderCanvas();
    renderInputValues();
}
function onRemoveLine() {
    removeLine();
    onSwitchLine();
}
function onSetColor(color) {
    setColor(color);
    renderCanvas();
}
function onSetStrokeColor(color) {
    setStrokeColor(color);
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
function onSetLineSize(diff) {
    setLineSize(diff);
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
        if (idx === currLineIdx && !gIsExport)
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
    const txtLength = txt.length * size / 1.2;
    gCtx.beginPath();
    gCtx.rect(x - txtLength / 2, y - size / 1.5, txtLength, size + 8);
    gCtx.strokeStyle = strokeColor;
    gCtx.stroke();
}
function renderInputValues() {
    const elEditorUtilsContainer = document.querySelector('.editor-utils-container');
    const elInputs = Array.from(elEditorUtilsContainer.querySelectorAll('input'));
    const currLine = getMeme().lines[getCurrLineIdx()];
    elInputs.forEach((elInput, idx) => {
        elInputs[idx].value = currLine[elInput.id];
    });
}
function setCanvasContext(ctx) {
    gCtx = ctx;
}
function resizeElCanvas(elTemplateImg) {
    gElCanvas.width = elTemplateImg.width;
    gElCanvas.height = elTemplateImg.height;
}
