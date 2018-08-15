<template lang="pug">
section.frame
  chat-welcome.welcome
  chat-controls.controls(@new-message="newMessage" :disabled="controlsDisabled")
  chat-conversation.conversation(:messages="messages")
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
import { userSaid } from '~/common/bot'
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
    botResponse: []
    controlsEnabled: true

  computed:
    controlsDisabled: -> !@controlsEnabled
    messages: -> @$store.state.messages

  methods:
    newMessage: (content, sender = 'user') ->
      return unless content && content.length

      if sender is 'user'
        @controlsEnabled = false
        @userSaid content

      id = @messages.length + 1
      @$store.commit 'messages/add', { id, content, sender }

    processBotResponse: ->
      line = @botResponse.shift()
      @newMessage line, 'bot'

      if @botResponse.length
        window.setTimeout (=> @processBotResponse()), 4000
        return

      window.setTimeout (=> @controlsEnabled = true), 3000

    userSaid: (content) ->
      @botResponse = userSaid content
      return unless @botResponse && @botResponse.length
      window.setTimeout (=> @processBotResponse()), 2000
</script>
