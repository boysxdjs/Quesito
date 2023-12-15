const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 : Te Gusta El Bot ? Compralo Con wa.me/51906528530* ${pesan}`;
  let teks = `*Ey 🌱 Tenemos Actividades , Vs , Dinamicas , Sorteos GoGo*\n\n${oi}\n\n*𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 : @only.ventas.bot*\n\n`;
  for (const mem of participants) {
    teks += `🤖┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n🤖 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 🤖`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
