<template lang="pug">
  div
    h1 {{ greeting }}
    nuxt-link(to="/") I'm fine. Thanks!
</template>

<style lang="stylus" scoped>
h1
  font-size 3em
  font-weight normal
</style>

<script lang="coffee">
export default
  data: ->
    greeting: 'how are you?'
</script>
