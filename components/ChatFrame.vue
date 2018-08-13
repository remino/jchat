<template lang="pug">
section.frame
  chat-welcome.welcome
  chat-controls.controls(@new-msg="newMsg" :disabled="controlsDisabled")
  chat-conversation.conversation(:msgs="msgs")
</template>

<style lang="stylus" scoped>
@import '../assets/init'

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
  padding-top = 1.5rem
  padding-bottom = controls-height + padding-top

  flex-grow: 1
  padding: padding-top padding-h padding-bottom

.frame
  align-items: stretch
  display: flex
  flex-flow: column nowrap
  justify-content: center
  min-height: 100%
  width: 100%

.welcome
  flex-shrink: 1
</style>

<script lang="coffee">
import ChatControls from '~/components/ChatControls'
import ChatConversation from '~/components/ChatConversation'
import ChatWelcome from '~/components/ChatWelcome'

export default
  components: {
    ChatControls,
    ChatConversation,
    ChatWelcome
  }

  data: ->
    controlsEnabled: true,

    msgs: [
      {
        id: 1
        content: 'Hello'
        loaded: true
      }
    ]

  computed:
    controlsDisabled: -> !@controlsEnabled

  methods:
    newMsg: (msg) ->
      return unless msg.length > 0

      newId = @msgs.length + 1

      @controlsEnabled = false

      @msgs.push
        id: newId
        content: msg
        from: 'me'

      window.setTimeout (=> @controlsEnabled = true), 5000
</script>
