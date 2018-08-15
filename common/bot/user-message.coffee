import countries from '~/common/countries'
import getterSetter from '~/common/getter-setter'
import { hasJaChar } from '~/common/util'
import getCountryCode from '~/common/bot/get-country-code'

class UserMessage
  { getter, setter } = getterSetter @

  filler: true

  constructor: (@content) ->

  getter 'country', -> countries.nameForCode @countryCode
  getter 'countryCode', -> getCountryCode @content
  getter 'japanese', -> hasJaChar @content

export default UserMessage
