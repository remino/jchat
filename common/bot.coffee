import getterSetter from '~/common/getter-setter'
import BotResponse from '~/common/bot/bot-response'
import UserMessage from '~/common/bot/user-message'
import { filler } from '~/common/bot/functions'
import { whichWord } from '~/common/util'

class Bot
  { getter, setter } = getterSetter @

  userMessageProperties: [
    'country'
    'food'
    'girls'
    'negative'
    'japanese'
    'filler'
  ]

  userSaid: (@content) ->
    return unless @content

    try
      message = @userMessage = new UserMessage @content

      for property in @userMessageProperties
        value = !!message[property]

        if value
          response = new BotResponse property, message
          return response.get

    catch error
      console.error error
      response = new BotResponse 'filler'
      return response.get

bot = new Bot

userSaid = (content) -> bot.userSaid content

export { userSaid }
