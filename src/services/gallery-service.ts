
const gTemplates: {
    _id: string
    url: string
    keywords: string[]
}[] = [
        { _id: "t1", url: 'imgs/templates/1.jpg', keywords: ['look', 'around', 'funny', 'תראה', 'מצחיק', 'סביב'] },
        { _id: "t2", url: 'imgs/templates/2.jpg', keywords: ['trump', 'president', 'funny', 'טראמפ', 'נשיא', 'מצחיק'] },
        { _id: "t3", url: 'imgs/templates/3.jpg', keywords: ['cute', 'dog', 'love', 'חמוד', 'כלב', 'אהבה'] },
        { _id: "t4", url: 'imgs/templates/4.jpg', keywords: ['cute', 'baby', 'succses', 'חמוד', 'תינוק', 'הצלחה'] },
        { _id: "t5", url: 'imgs/templates/5.jpg', keywords: ['cute', 'baby', 'dog', 'sleep', 'שינה', 'חמוד', 'תינוק', 'כךב'] },
        { _id: "t6", url: 'imgs/templates/6.jpg', keywords: ['cute', 'cat', 'sleep', 'חמוד', 'חתול', 'שינה'] },
        { _id: "t7", url: 'imgs/templates/7.jpg', keywords: ['really', 'tell', 'wonka', 'באמת', 'תגיד', 'ונקה'] },
        { _id: "t8", url: 'imgs/templates/8.jpg', keywords: ['cute', 'evil', 'baby', 'חמוד', 'תינוק', 'רשע'] },
    ]

let gCurrTemplate: {
    _id: string
    url: string
    keywords: string[]
}

function getTemplates() {
    return gTemplates
}

function getCurrTemplateId() {
    if (!gCurrTemplate) return ('No template found')
    return gCurrTemplate._id
}

function setTemplate(templateId: string) {
    const newTemplate: {
        _id: string
        url: string
        keywords: string[]
    } | undefined = gTemplates.find(template => template._id === templateId)
    if (!newTemplate) return console.log('Cannot set template')
    gCurrTemplate = newTemplate
}
