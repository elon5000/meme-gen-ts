
const gElCanvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement

let gCtx: CanvasRenderingContext2D | null


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
    meme.lines.forEach(line => renderLine(line))
}

function renderLine(line: Line) {
    if (!gCtx) return console.log('Cannot render canvas')
    const {color, font, size, align, txt} = line
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align as CanvasTextAlign
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, 100 ,100) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, 100 ,100) // Draws (strokes) a given text at the given (x, y) position.
}

function setCanvasContext(ctx: CanvasRenderingContext2D) {
    gCtx = ctx
}

function resizeElCanvas(elTemplateImg: CanvasImageSource) {
    gElCanvas.width = elTemplateImg.width as number
    gElCanvas.height = elTemplateImg.height as number
}