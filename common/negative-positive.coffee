isNegative = (str) ->
  !!str.match /\b((ca|do)n(['’‘]|no)?t|incapable|not?|unable)\b/

isPositive = (str) -> !isNegative str

export { isNegative, isPositive }
