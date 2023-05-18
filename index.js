const TELEGRAM_BOT_TOKEN = "5898316708:AAEEGN-FqWeo2kjrXUdw2S1GTQV53AmFz0A"



// const TeleBot = require('telebot');
const { Telegraf} = require('telegraf')
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
const chatIds = []
const translate = require("translation-google")

// const CronJob = require('cron').CronJob;
// const job = new CronJob(
//     '0/5 * * * * *',
//     function () {
//         console.log('You will see this message every 5 second');
//         chatIds.forEach((chatId) => {
//             bot.sendMessage(chatId, "salom")

//         })

//     },
//     null,
//     true,

// );
// Use this if the 4th param is default value(false)



// bot.on('text', (msg) => msg.reply.text("Kelgan habar:  " + " " + msg.text));

bot.on("/start", (msg) => {
    let chatId = msg.chat.id;
    if (!chatIds.includes(chatId)) {
        chatIds.push(chatId);
        msg.reply.text("Boshladik!")
    }
    // job.start()
});
bot.on("/stop", (msg) => {
    let chatId = msg.chat.id;
    if (chatIds.includes(chatId)) {
        chatIds.pop(chatId);
        msg.reply.text("to'xta!")
    }
})

// bot.on('text', (msg) => msg.reply.text("Kelgan habar:  " + " " + msg.text));

bot.on('text',async (msg) =>{
const text = msg.update.message.text
 const newText = await translate(text,{form:"uz",to:"en"});
msg.reply( `${newText.text } --- ${ text} `);

})

bot.launch();