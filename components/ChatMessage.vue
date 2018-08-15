<template lang="pug">
li(:class="classes")
  span {{ message.content }}
</template>

<style lang="stylus" scoped>
@import '../assets/init'

@keyframes fade-in
  0%
    transform: translateY(4ex)
    opacity: 0

  100%
    transform: translateY(0)
    opacity: 1

@keyframes wave
  0%, 50%
    transform: translateY(0)

  12.5%
    transform: translateY(-0.25em)

  37.75%
    transform: translateY(0.25em)

li
  animation: fade-in 0.25s linear
  background-color: colors.gray-light
  padding: 0.5em (padding-h / 2)
  border-radius: 0.5em
  margin: 0 10% 0 0
  will-change: opacity transform

.jchat__message
  &--loading
    span
      display: none

    &::after
      animation: wave 1s ease-in 3
      content: '···'
      display: inline-block
      font-size: 2rem
      line-height: 0.5
      opacity: 0.5
      vertical-align: middle
      will-change: transform

  &--user
    align-self: flex-end
    background-color: colors.primary
    color: colors.bg
    margin-left: 10%
    margin-right: 0
</style>

<script lang="coffee">
export default
  props:
    message:
      default: {}
      type: Object

  data: ->
    loading: if @message.loaded is true then false else true

  mounted: ->
    window.setTimeout (=> @loading = false), 3000

  computed:
    isFromUser: -> @message.sender is 'user'

    classes: ->
      [ @senderClass, @loadingClass ]

    loadingClass: ->
      return if @isFromUser
      'jchat__message--loading' if @loading

    senderClass: ->
      return 'jchat__message--user' if @isFromUser
      'jchat__message--bot'
</script>
