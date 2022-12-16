
const gTemplates: {
    _id: number
    url: string
    keywords: string[]
}[] = [
        { _id: 1, url: 'imgs/templates/1.jpg', keywords: ['look', 'around', 'funny', 'תראה', 'מצחיק', 'סביב'] },
        { _id: 2, url: 'imgs/templates/2.jpg', keywords: ['trump', 'president', 'funny', 'טראמפ', 'נשיא', 'מצחיק'] },
        { _id: 3, url: 'imgs/templates/3.jpg', keywords: ['cute', 'dog', 'love', 'חמוד', 'כלב', 'אהבה'] },
        { _id: 4, url: 'imgs/templates/4.jpg', keywords: ['cute', 'baby', 'succses', 'חמוד', 'תינוק', 'הצלחה'] },
        { _id: 5, url: 'imgs/templates/5.jpg', keywords: ['cute', 'baby', 'dog', 'sleep', 'שינה', 'חמוד', 'תינוק', 'כךב'] },
        { _id: 6, url: 'imgs/templates/6.jpg', keywords: ['cute', 'cat', 'sleep', 'חמוד', 'חתול', 'שינה'] },
        { _id: 7, url: 'imgs/templates/7.jpg', keywords: ['really', 'tell', 'wonka', 'באמת', 'תגיד', 'ונקה'] },
        { _id: 8, url: 'imgs/templates/8.jpg', keywords: ['cute', 'evil', 'baby', 'חמוד', 'תינוק', 'רשע'] },
    ]

let gCurrTemplate: {
    _id: number
    url: string
    keywords: string[]
}

function getTemplates() {
    return gTemplates
}

function setTemplate(templateId: number) {
    const newTemplate: {
        _id: number
        url: string
        keywords: string[]
    } | undefined = gTemplates.find(template => template._id === templateId)
    if (newTemplate === undefined) return console.log('Cannot set template')
    gCurrTemplate = newTemplate
    console.log('gCurrTemplate:', gCurrTemplate)
}
