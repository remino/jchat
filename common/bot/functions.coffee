import countries from '~/common/countries'
import sample from 'lodash.sample'
import strings from '~/common/strings'
import { hasWord, whichWord } from '~/common/util'

filler = -> sample strings.fillerWords

getCountryCode = (str) ->
  countries.codes[whichWord str, Object.keys(countries.codes)]

isAboutFood = (str) ->
  hasWord str, [
    'edamame'
    'food'
    'foods'
    'nato'
    'natto'
    'nigiri'
    'sushi'
    'takoyaki'
    'teriyaki'
  ]

isAboutGirls = (str) ->
  !!str.match /\b(girls?|lad(ies|ys?)|wom[ae]n)\b/i

export { filler, getCountryCode, isAboutFood, isAboutGirls }
