const { cmd, commands } = require('../command')

cmd({
    pattern: "hi",
    desc: "greeting",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, reply}) => {
try{
    return await reply("හෙලෝ, අලුත් Command එක වැඩ කරනවා!")
} catch (e) {
    console.log(e)
    reply(`${e}`)
}
})

