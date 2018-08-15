hasJaChar = (str) ->
  re = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/
  !!str.match re

hasWord = (str, words) -> !!whichWord str, words

tokenReplace = (str, replacements) ->
  modified = str
  keys = Object.keys replacements

  for key in keys
    token = "{{#{key}}}"
    replacement = replacements[key]
    modified = str.replace token, replacement

  modified

whichWord = (str, words) ->
  words = [words] unless words instanceof Array

  for word in words
    keyword = word.replace '\\', '\\\\'
    re = RegExp "\\b#{keyword}\\b", 'i'
    return word if str.match re

export { hasJaChar, hasWord, tokenReplace, whichWord }
