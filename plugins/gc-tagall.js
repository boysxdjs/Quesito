const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*Te Gusta El Bot ? Compralo Con wa.me/51937305486* ${pesan}`;
  let teks = `𝗗𝗲𝘀𝗽𝗶𝗲𝗿𝘁𝗲𝗻 𝗩𝗮𝗴𝘅𝘀 ,𝗟𝗹𝗲𝗻𝗲𝗻 𝗚𝗼𝗴𝗼𝗴𝗼 🦋\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += `🦋┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n🦋 𝗟𝗼𝗹𝗮 𝗕𝗼𝘁 🦋`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
