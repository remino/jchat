<template lang="pug">
  div
    h1
      nuxt-link(to="/about/") {{ greeting }}
</template>

<style lang="stylus" scoped>
h1
  font-size 3em
  font-weight normal
</style>

<script lang="coffee">
export default
  data: ->
    greeting: 'hello'
</script>
