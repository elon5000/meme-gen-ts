
let gMeme: Meme

let gCurrLineIdx: number = 0

function resetMeme() {
    gMeme = {
        selectedTemplateId: getCurrTemplateId(),
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'TOP TEXT',
                size: 22,
                align: 'center' as CanvasTextAlign,
                color: 'white',
                strokeColor: 'black',
                font: 'impact',
                pos: { x: 100, y: 40 },
                _id: makeId()
            }
        ]
    }
}

function setCurrTextLine(text: string) {
    gMeme.lines[gCurrLineIdx].txt = text
}

function setColor(color:string) {
    gMeme.lines[gCurrLineIdx].color = color
}

function getMeme() {
    return gMeme
}

function getCurrLineIdx() {
    return gCurrLineIdx
}

function addLine() {
    gMeme.lines.push(_createLine('NEW LINE'))
}

function switchLine() {
    gCurrLineIdx++
    if (gCurrLineIdx >= gMeme.lines.length) gCurrLineIdx = 0
}

function _createLine(txt: string) {
    return {
        txt,
        size: 22,
        align: 'center' as CanvasTextAlign,
        color: 'white',
        strokeColor: 'black',
        font: 'impact',
        pos: { x: 100, y: 100 },
        _id: makeId()
    } as Line
}