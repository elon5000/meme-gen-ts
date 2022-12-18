

function onSetCanvas() {
    const elCanvas:HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
    const elTemplateImg:HTMLElement = document.getElementById(getCurrTemplateId()) as HTMLElement
    const context: CanvasRenderingContext2D = elCanvas.getContext('2d') as CanvasRenderingContext2D
    setCanvasContext(context)
    renderCanvasTemplate(elTemplateImg)
}

function onSetEditorHidden(isOpen:boolean) {
    const elEditorWarpper:HTMLElement = document.querySelector('.editor-warpper') as HTMLElement
    isOpen ? elEditorWarpper.classList.remove('hidden') : elEditorWarpper.classList.add('hidden')
}

function renderCanvasTemplate(elTemplateImg:HTMLElement) {
    console.log('Hello from render', elTemplateImg)
}