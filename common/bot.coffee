import camelCase from 'lodash.camelcase'
import sample from 'lodash.sample'
import getterSetter from './getterSetter'
import { hasJaChar, hasWord, tokenReplace, whichWord } from './strings'

countries = [
  'canada'
  'usa'
]

strings =
  country: 'you are from {{country}}!'
  jaSoGood: 'wow! your japanese is SO GOOD!'

  fillerWords: [
    'え〜〜'
    'そうですか'
    'なるほど'
    'ん〜'
    '面白いね'
    'i see'
    'ah'
  ]

class Bot
  { getter, setter } = getterSetter @

  userMessageProperties: [
    'country'
    'japanese'
    'filler'
  ]

  userSaid: (@content) ->
    return unless @content

    message = @userMessage = new UserMessage @content

    for property in @userMessageProperties
      value = message[property]

      if value
        response = new BotResponse property, message
        return response.get

class BotResponse
  { getter, setter } = getterSetter @

  forJapanese: strings.jaSoGood

  getter 'userContent', -> @userMessage.content

  constructor: (@kind, @userMessage) ->

  getter 'forFiller', -> filler()
  getter 'getterMethod', -> camelCase "for_#{@kind}"
  getter 'get', -> @[@getterMethod]

  getter 'forCountry', ->
    tokenReplace strings.country,
      country: @userContent.toUpperCase()

class UserMessage
  { getter, setter } = getterSetter @

  filler: true

  constructor: (@content) ->

  getter 'country', -> getCountry @content
  getter 'japanese', -> hasJaChar @content

bot = new Bot

filler = -> sample strings.fillerWords

getCountry = (str) ->
  whichWord str, countries

userSaid = (content) -> bot.userSaid content

export { userSaid }
