const TelegramBot = require('node-telegram-bot-api');

const token = '<token>'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

count = 0;

bot.on('message', (msg) => {
    count += 1;
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log(`\n\nbot started... ${count}`, msg);
    if (messageText === '/start') {
      bot.sendMessage(chatId, 'Welcome to the bot!');
    }

    bot.forwardMessage("@HackConnectSG", chatId, msg.message_id);
  });