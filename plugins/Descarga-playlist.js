/* Created by https://github.com/BrunoSobrino */
       /* DiseΓ±o by Yameko-Bot V1*/

import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `πΌπΜππππ πππππππππππ πππ: ${args.join(" ")}`
const sections = [{
title: `β‘ββ’β€ββ£ββββ’`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'π΄ππππ πππ πππππΜπ π’ ππππππππ ππππππ',
title: " γ π π¨π¦πππ π₯ππππππ’π‘πππ γ",
buttonText: "[β¦ ππππππππππ β¦]",
sections}
const fake = { quoted: {
key : {
remoteJid: '6283136505591-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: 'πβπ πΏπππ - π΅ππ‘ - ππ·, 
orderTitle: `Mystic`,
thumbnail: imagen1, 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'playlist2') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*')
console.log(e)
}}
handler.command = /^playlist|playlist2$/i
export default handler
