import countries from '~/common/countries'
import { whichWord } from '~/common/util'

export default (str) ->
  countries.codes[whichWord str, Object.keys(countries.codes)]
