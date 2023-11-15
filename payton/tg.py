import telebot 

bot = telebot.TeleBot('6951046334:AAFt7lerf2Qptumrk0BmFx7RQuEzGaVb1Mk')

@bot.message_handler(commands=['start', 'test'])
def main(message):
    bot.send_message(message.chat.id, 'привет я PROWEB bot')

@bot.message_handler(commands=['id'])
def main(message):
    bot.send_message(message.chat.id, message.chat)

@bot.message_handler()
def info(message):
    if message.text.lower()=="что ты умеешь" :
        bot.send_message(message.chat.id, "я отправляю форму с сайта PROWEB")


bot.polling(none_stop=True)