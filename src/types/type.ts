
type Meme = {
    selectedTemplateId: string | null
    selectedLineIdx: number
    lines: Line[]
}

type Line = {
    txt: string
    size: number
    align: CanvasTextAlign
    color: string
    strokeColor: string
    font: string
    pos: {
        x: number
        y: number
    }
    _id: string
}

type Template = {
    _id: string
    url: string
    keywords: string[]
}
