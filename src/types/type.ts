
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
    font: string
}

type Template = {
    _id: string
    url: string
    keywords: string[]
}
