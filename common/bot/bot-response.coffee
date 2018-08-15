import sample from 'lodash.sample'
import camelCase from 'lodash.camelcase'
import getterSetter from '~/common/getter-setter'
import strings from '~/common/strings'
import { filler } from '~/common/bot/functions'

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

export default BotResponse
