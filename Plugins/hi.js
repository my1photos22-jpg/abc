const { cmd } = require('../command')

cmd({
    pattern: "hi",
    desc: "අලුත් Command එක පරීක්ෂා කිරීමට",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{reply}) => {
try{
    return await reply("ඔබේ අලුත් Hi Command එක සාර්ථකව වැඩ කරනවා! ✅")
} catch (e) {
    reply(`${e}`)
}
})

