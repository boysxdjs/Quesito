const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `𝗤𝘂𝗲𝘀𝗼 𝗧𝗲 𝗜𝗻𝘃𝗼𝗰𝗮 𝗣𝗹𝗮𝗻𝘁𝗶𝘁𝗮 𝗔𝗻𝗼𝘁𝗮𝘁𝗲 🤗\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `⭐┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n⭐ 𝗤𝘂𝗲𝘀𝗼 𝗕𝗼𝘁 ⭐`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
