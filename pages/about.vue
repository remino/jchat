<template lang="pug">
  div {{ greeting }}
</template>

<style lang="stylus" scoped>
div
  font-size 3em
</style>

<script lang="coffee">
export default
  data: ->
    greeting: 'how are you?'
</script>
