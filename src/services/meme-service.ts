
let gMeme: Meme

let gCurrLineIdx:number = 0

function resetMeme() {
    gMeme = {
        selectedTemplateId: getCurrTemplateId(),
        selectedLineIdx: 0,
        lines: [{
            txt: 'TOP TEXT',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'impact'
        }]
    }
}

function setCurrTextLine(text:string) {
    gMeme.lines[gCurrLineIdx].txt = text
}

function getMeme() {
    return gMeme
}