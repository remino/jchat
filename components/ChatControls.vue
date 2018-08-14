<template lang="pug">
form(@submit.prevent="sendMessage")
  .fieldset
    label
      input(autofocus type="text" v-model="message")

    label
      input(type="submit" value="Send" :disabled="inputDisabled")
</template>

<style lang="stylus" scoped>
@import '../assets/init'

form
  border-top: solid 1px colors.gray
  height: 100%
  padding: 0 padding-h

input
  padding: 0 (padding-h / 4)
  width: 100%

  &[type=submit]
    background-color: colors.primary
    border-bottom-left-radius: 0
    border-top-left-radius: 0
    border: none
    color: colors.bg
    cursor: pointer
    padding: 0 (padding-h / 2)

    &:focus, &:hover
      &:not(:disabled)
        background-color: colors.button-hover

  &[type=text]
    border: solid 1px colors.gray
    border-bottom-right-radius: 0
    border-top-right-radius: 0

    &:focus, &:hover
      border-color: colors.gray-dark

label
  &:first-child
    flex-grow: 1

  &:last-child
    flex-shrink: 1

.fieldset
  align-items: center
  border: 0
  display: flex
  flex-flow: row nowrap
  height: 100%
  justify-content: flex-start
  margin: 0 auto
  max-width: max-width
  padding: 0
</style>

<script lang="coffee">
export default
  props:
    disabled:
      default: false
      type: Boolean

  data: ->
    message: ''

  computed:
    inputDisabled: -> !@inputEnabled

    inputEnabled: ->
      return false if @disabled
      @message.length > 0

  methods:
    sendMessage: ->
      @$emit 'new-message', @message
      @message = ''
</script>
