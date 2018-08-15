import countries from '~/common/countries'
import getterSetter from '~/common/getter-setter'
import { hasJaChar } from '~/common/util'
import { getCountryCode, isAboutFood, isAboutGirls } from '~/common/bot/functions'
import { isNegative, isPositive } from '~/common/negative-positive'

class UserMessage
  { getter, setter } = getterSetter @

  filler: true

  constructor: (@content) ->

  getter 'country', -> countries.nameForCode @countryCode
  getter 'countryCode', -> getCountryCode @content
  getter 'food', -> isAboutFood @content
  getter 'girls', -> isAboutGirls @content
  getter 'japanese', -> hasJaChar @content
  getter 'negative', -> isNegative @content
  getter 'positive', -> isPositive @content

export default UserMessage
