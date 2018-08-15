import sample from 'lodash.sample'
import camelCase from 'lodash.camelcase'
import getterSetter from '~/common/getter-setter'
import strings from '~/common/strings'
import { filler } from '~/common/bot/functions'

class BotResponse
  { getter, setter } = getterSetter @

  forGirls: strings.aboutGirls
  forJapanese: strings.jaSoGood

  getter 'userContent', -> @userMessage.content

  constructor: (@kind, @userMessage) ->

  getter 'forCountry', -> sample strings.countries[@userMessage.countryCode]
  getter 'forFiller', -> filler()
  getter 'forFood', -> @genericResponse
  getter 'forNegative', -> sample strings.forNegative
  getter 'forPositive', -> sample strings.forPositive
  getter 'getterMethod', -> camelCase "for_#{@kind}"
  getter 'nextQuestion', -> sample strings.questions

  getter 'genericResponse', ->
    return @forPositive if @userMessage.positive
    @forNegative

  getter 'get', ->
    response = @[@getterMethod]
    response = @forFiller unless response && response.length
    response = [response].filter((v) => v) unless response instanceof Array
    response.push @nextQuestion
    response

export default BotResponse
