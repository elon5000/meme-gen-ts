
const gElCanvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement

let gCtx: CanvasRenderingContext2D | null


function onSetCanvas() {
    const context: CanvasRenderingContext2D = gElCanvas.getContext('2d') as CanvasRenderingContext2D
    setCanvasContext(context)
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
}

function renderCanvasTemplate(elTemplateImg: CanvasImageSource) {
    gCtx?.drawImage(elTemplateImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function setCanvasContext(ctx: CanvasRenderingContext2D) {
    gCtx = ctx
}

function resizeElCanvas(elTemplateImg: CanvasImageSource) {
    gElCanvas.width = elTemplateImg.width as number
    gElCanvas.height = elTemplateImg.height as number
}