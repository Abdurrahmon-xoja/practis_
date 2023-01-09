import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';
dotenv.config();


const bot = new Telegraf(process.env.bot_token);


bot.start(ctx => {
    ctx.reply("hello");
})


bot.launch()

