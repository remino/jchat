import countries from '~/common/countries'
import sample from 'lodash.sample'
import strings from '~/common/strings'
import { whichWord } from '~/common/util'

filler = -> sample strings.fillerWords

getCountryCode = (str) ->
  countries.codes[whichWord str, Object.keys(countries.codes)]

export { filler, getCountryCode }
