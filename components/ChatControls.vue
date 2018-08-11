<template lang="pug">
form(@submit.prevent="sendMsg")
  label
    input#msg(autofocus type="text" v-model="msg")

  label
    input(type="submit" value="Send" :disabled="disabled")
</template>

<style lang="stylus" scoped>
@import '../assets/init'

form
  align-items: center
  border-top: solid 1px colors.gray
  display: flex
  height: 100%
  flex-flow: row nowrap
  justify-content: flex-start
  padding: 0 padding-h

input
  padding: 0 (padding-h / 4)
  width: 100%

  &[type=submit]
    background-color: colors.primary
    border: none
    color: colors.bg
    cursor: pointer
    padding: 0 (padding-h / 2)

    &:focus, &:hover
      &:not(:disabled)
        background-color: colors.button-hover

  &[type=text]
    border: solid 1px colors.gray

    &:focus, &:hover
      border-color: colors.gray-dark

label
  &:first-child
    flex-grow: 1

  &:last-child
    flex-shrink: 1

  + label
    padding-left: (padding-h / 4)
</style>

<script lang="coffee">
export default
  data: ->
    msg: ''

  computed:
    disabled: -> !@enabled
    enabled: -> @msg.length > 0

  methods:
    sendMsg: ->
      @$emit 'new-msg', @msg
      @msg = ''
</script>
