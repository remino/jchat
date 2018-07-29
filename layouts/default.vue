<template lang="pug">
  div
    nav
      nuxt-link(v-if="$i18n.locale !== 'fr'" :to="`/fr` + $route.fullPath")
        | {{ $t('home') }}

      nuxt-link(v-if="$i18n.locale !== 'en'" :to="$route.fullPath.replace(/^\\/[^\\/]+/, '')")
        | {{ $t('home') }}

    nuxt
</template>

<style lang="stylus">
</style>
