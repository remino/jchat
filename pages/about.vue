<template lang="md">
# {{ greeting }}

[I'm fine. Thanks!](/)
</template>

<style lang="stylus" scoped>
h1
  font-size 3em
  font-weight normal
</style>

<script lang="coffee">
import md from '~/common/md'

export default Object.assign md,
  data: ->
    greeting: 'how are you?'
</script>
