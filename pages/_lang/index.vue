<template lang="pug">
div
  h1
    nuxt-link(:to="$i18n.path('about/')") {{ $t('greeting') }}
</template>

<style lang="stylus" scoped>
h1
  font-size 3em
  font-weight normal
</style>
