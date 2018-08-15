import camelCase from 'lodash.camelcase'
import sample from 'lodash.sample'
import countries from './countries'
import getterSetter from './getterSetter'
import { hasJaChar, hasWord, tokenReplace, whichWord } from './strings'

strings =
  jaSoGood: 'wow! your japanese is SO GOOD!'

  countries:
    ca: [
      'wow! CANADA! when i think of CANADA, i think about ネイチャー'
      'i went to VANCOUVER!'
      'i like オーロラ'
    ]

    us: [
      'i love NEW YORK!'
      'i like hiphop!'
    ]

  fillerWords: [
    'え〜〜'
    'そうですか'
    'なるほど'
    'ん〜'
    '面白いね'
    'i see'
    'ah'
  ]

  questions: [
    'do you like EDAMAME?'
    'do you like NATTO?'
    'can you use CHOPSTICKS?'
    ''
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

    try
      message = @userMessage = new UserMessage @content

      for property in @userMessageProperties
        value = message[property]

        if value
          response = new BotResponse property, message
          return response.get

    catch error
      console.error error
      response = new BotResponse 'filler'
      return response.get

class BotResponse
  { getter, setter } = getterSetter @

  forJapanese: strings.jaSoGood

  getter 'userContent', -> @userMessage.content

  constructor: (@kind, @userMessage) ->

  getter 'forFiller', -> filler()
  getter 'getterMethod', -> camelCase "for_#{@kind}"
  getter 'nextQuestion', -> sample strings.questions

  getter 'forCountry', ->
    response = sample strings.countries[@userMessage.countryCode]
    question = @nextQuestion
    [response, question]

  getter 'get', ->
    response = @[@getterMethod]
    response = @forFiller unless response && response.length
    response = [response].filter((v) => v) unless response instanceof Array
    response

class UserMessage
  { getter, setter } = getterSetter @

  filler: true

  constructor: (@content) ->

  getter 'country', -> countries.nameForCode @countryCode
  getter 'countryCode', -> getCountryCode @content
  getter 'japanese', -> hasJaChar @content

bot = new Bot

filler = -> sample strings.fillerWords

getCountryCode = (str) ->
  countries.codes[whichWord str, Object.keys(countries.codes)]

userSaid = (content) -> bot.userSaid content

export { userSaid }
