/*import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler*/

// Fix By Zeltoria


let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `Teksnya?`
    let teks = encodeURI(text)
    if (command == 'ttp') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    }
    
handler.help = ['ttp']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler