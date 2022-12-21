
const gElCanvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement

let gCtx: CanvasRenderingContext2D | null


function onAddLine() {
    addLine()
    switchLine()
    renderCanvas()
}

function onSwitchLine() {
    switchLine()
    renderCanvas()
}

function onSetCanvas() {
    resetMeme()
    const context: CanvasRenderingContext2D = gElCanvas.getContext('2d') as CanvasRenderingContext2D
    setCanvasContext(context)
    renderCanvas()
}

function onSetCurrTextLine(text: string) {
    setCurrTextLine(text)
    renderCanvas()
}

function onSetEditorHidden(isOpen: boolean) {
    const elEditorWarpper: HTMLElement = document.querySelector('.editor-warpper') as HTMLElement
    isOpen ? elEditorWarpper.classList.remove('hidden') : elEditorWarpper.classList.add('hidden')
}

function renderCanvas() {
    const elTemplateImg: CanvasImageSource = document.getElementById(getCurrTemplateId()) as CanvasImageSource
    resizeElCanvas(elTemplateImg)
    renderCanvasTemplate(elTemplateImg)
    renderCanvasLines()
}

function renderCanvasTemplate(elTemplateImg: CanvasImageSource) {
    gCtx?.drawImage(elTemplateImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderCanvasLines() {
    const meme: Meme = getMeme()
    const currLineIdx: number = getCurrLineIdx()
    meme.lines.forEach((line, idx) => {
        if (idx === currLineIdx) renderRect(line)
        renderLine(line)
    })
}

function renderLine(line: Line) {
    if (!gCtx) return console.log('Cannot render canvas')
    const { color, strokeColor, font, size, align, txt, pos } = line
    gCtx.lineWidth = 2
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, pos.x, pos.y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, pos.x, pos.y) // Draws (strokes) a given text at the given (x, y) position.
}

function renderRect(line: Line) {
    if (!gCtx) return console.log('Cannot render canvas')
    const { pos, size, txt, color } = line
    const { x, y } = pos
    const txtLength: number = txt.length * size
    gCtx.beginPath()
    gCtx.rect(x - txtLength / 2, y - size / 1.5, txtLength, size + 4)
    gCtx.strokeStyle = color
    gCtx.stroke()
}

function setCanvasContext(ctx: CanvasRenderingContext2D) {
    gCtx = ctx
}

function resizeElCanvas(elTemplateImg: CanvasImageSource) {
    gElCanvas.width = elTemplateImg.width as number
    gElCanvas.height = elTemplateImg.height as number
}