<template lang="pug">
article
  ul
    li(v-for="msg in msgs" :class="classesFor(msg)" :key="msg.id")
      | {{ msg.content }}
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

article
  align-items: stretch
  display: flex
  flex-flow: column nowrap
  justify-content: flex-end
  overflow: hidden

li, ul
  list-style: none
  margin: 0
  padding: 0

li
  animation: fade-in 0.25s linear
  background-color: colors.gray-light
  padding: 1ex (padding-h / 2)
  border-radius: 0.5em
  margin: 1ex 10% 0 0
  will-change: opacity transform

  + li
    margin-top: 1ex

ul
  display: flex
  flex-flow: column nowrap
  align-items: flex-start
  justify-content: flex-start

.msg
  &--me
    align-self: flex-end
    background-color: colors.primary
    color: colors.bg
    margin-left: 10%
    margin-right: 0
</style>

<script lang="coffee">
export default
  props:
    msgs:
      default: []
      type: Array

  watch:
    msgs: ->
      @scrollToBottom()

  methods:
    classesFor: (msg) ->
      'msg--me' if msg.from is 'me'

    scrollToBottom: ->
      self = window
      posY = self.document.body.clientHeight
      @$nextTick (=> self.scrollTo 0, posY)
</script>
