<template lang="pug">
section
  chat-controls.controls(@new-msg="newMsg")
  chat-conversation.conversation(:msgs="msgs")
</template>

<style lang="stylus" scoped>
@import '../assets/init'

section
  height: 100%
  width: 100%

.controls, .conversation
  box-sizing: border-box

.controls
  background: colors.bg
  height: controls-height
  left: 0
  position: fixed
  bottom: 0
  width: 100%
  z-index: 10

.conversation
  padding-top = 2ex
  padding-bottom = controls-height + padding-top

  min-height: 100%
  padding: padding-top padding-h padding-bottom
  width: 100%
  z-index: 1
</style>

<script lang="coffee">
import ChatControls from '~/components/ChatControls'
import ChatConversation from '~/components/ChatConversation'

export default
  components: {
    ChatControls,
    ChatConversation
  }

  data: ->
    msgs: [
      {
        id: 1
        content: 'Hello'
      }
    ]

  methods:
    newMsg: (msg) ->
      return unless msg.length > 0

      newId = @msgs.length + 1

      @msgs.push
        id: newId
        content: msg
        from: 'me'
</script>
