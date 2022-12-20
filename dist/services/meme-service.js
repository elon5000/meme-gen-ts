"use strict";
let gMeme;
let gCurrLineIdx = 0;
function resetMeme() {
    gMeme = {
        selectedTemplateId: getCurrTemplateId(),
        selectedLineIdx: 0,
        lines: [{
                txt: 'TOP TEXT',
                size: 2,
                align: 'center',
                color: 'white',
                font: 'impact'
            }]
    };
}
function setCurrTextLine(text) {
    gMeme.lines[gCurrLineIdx].txt = text;
}
function getMeme() {
    return gMeme;
}
