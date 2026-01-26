const { cmd } = require('../command')

cmd({
    pattern: "test",
    desc: "Bot එක වැඩදැයි බැලීමට",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{reply}) => {
try{
    return await reply("සාර්ථකයි! අලුත් Command එක වැඩ කරනවා.")
} catch (e) {
    reply(`${e}`)
}
})

