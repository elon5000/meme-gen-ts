"use strict";
let gMeme;
let gCurrLineIdx = 0;
function resetMeme() {
    gMeme = {
        selectedTemplateId: getCurrTemplateId(),
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'TOP TEXT',
                size: 22,
                align: 'center',
                color: 'white',
                strokeColor: 'black',
                font: 'impact',
                pos: { x: 120, y: 40 },
                _id: makeId()
            }
        ]
    };
}
function setCurrTextLine(text) {
    gMeme.lines[gCurrLineIdx].txt = text;
}
function setColor(color) {
    gMeme.lines[gCurrLineIdx].color = color;
}
function setStrokeColor(color) {
    gMeme.lines[gCurrLineIdx].strokeColor = color;
}
function getMeme() {
    return gMeme;
}
function getCurrLineIdx() {
    return gCurrLineIdx;
}
function addLine() {
    gMeme.lines.push(_createLine('NEW LINE'));
}
function switchLine() {
    gCurrLineIdx++;
    if (gCurrLineIdx >= gMeme.lines.length)
        gCurrLineIdx = 0;
}
function _createLine(txt) {
    return {
        txt,
        size: 22,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        font: 'impact',
        pos: { x: 120, y: 140 },
        _id: makeId()
    };
}
