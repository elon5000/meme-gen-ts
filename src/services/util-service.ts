
function makeId(length: number = 3) {
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id: string = ''
    for (let i: number = 0; i < length; i++) {
        id += chars[getRandomInt(0, chars.length)]
    }
    return id
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}