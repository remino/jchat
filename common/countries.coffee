codes = {}

names =
  ca: ['canada', '🇨🇦']
  ja: ['japan', 'japon', 'nihon', 'nippon', '日本', 'にほん', 'ニホン', 'にっぽん', 'ニッポン', '🇯🇵']
  us: ['america', 'united states', 'united states of america', 'us', 'usa', '🇺🇸']

compileCodes = ->
  countryCodes = Object.keys names

  for code in countryCodes
    countryNames = names[code]

    for name in countryNames
      codes[name] = code

nameForCode = (code) ->
  countryNames = names[code] || []
  countryNames[0]

compileCodes()

export default { codes, names, nameForCode }
