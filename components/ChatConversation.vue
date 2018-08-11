<template lang="pug">
article
  ul
    chat-message(v-for="msg in msgs" :key="msg.id" :message="msg")
</template>

<style lang="stylus" scoped>
@import '../assets/init'

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
  + li
    margin-top: 0.5em

ul
  align-items: flex-start
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  margin: 0 auto
  max-width: max-width
  width: 100%
</style>

<script lang="coffee">
import ChatMessage from '~/components/ChatMessage'

export default
  components: {
    ChatMessage
  }

  props:
    msgs:
      default: []
      type: Array

  watch:
    msgs: ->
      @scrollToBottom()

  methods:
    scrollToBottom: ->
      self = window
      posY = self.document.body.clientHeight
      @$nextTick (=> self.scrollTo 0, posY)
</script>
