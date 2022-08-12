import TelegramBot from "node-telegram-bot-api";
import { NextApiRequest, NextApiResponse } from "next";


export default function tbot(req: NextApiRequest, res: NextApiResponse) {

    const token: string = process.env.T_TOKEN
    const bot: TelegramBot = new TelegramBot(token, { polling: true })

    if (req.query.command === 'start') {
        res.json({ response: 'Бот Grizli запущен' })
    }

    /*     bot.setMyCommands([
            {command: '/start', description: 'Начальное приветствие'},
            {command: '/info', description: 'Получить информацию о пользователе'}
        ]) */

    bot.on('message', async (msg) => {
        const text = msg.text
        const chatId = msg.chat.id

        console.log(this.text)

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/5eb/843/5eb8436f-51c7-315b-abc5-7f45216b5502/3.jpg')
            return bot.sendMessage(chatId, `Добро пожаловать? ${msg.from.first_name} ${msg.from.last_name}!`)
        }

        if (text.toLowerCase().trim() === '/off')
            return bot.sendMessage(chatId, `Я выключаюсь, пока!`)

        if (text === '/chatid')
            return bot.sendMessage(chatId, `chatId: ${chatId}`)

        return bot.sendMessage(chatId, `Вы написали мне 📢: ${text}`)

    });

}