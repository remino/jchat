module.exports =
  css: [
    '~/assets/app.styl'
  ]

  head:
    title: 'rmn'

    meta: [
      { charset: 'utf-8' }
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      { hid: 'description', name: 'description', content: 'Next RMN' }
    ]

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

  loading:
    color: '#3B8070'

  markdownit:
    preset: 'default'
    linkify: true
    breaks: true

  modules: [
    '@nuxtjs/markdownit'
  ]

  build:
    extractCSS: true

    extend: (config) ->
      config.module = {} unless config.module
      config.module.rules = [] unless config.module.rules
      config.resolve = [] unless config.resolve

      config.module.rules.push
        test: /\.styl(us)?$/
        use: [ 'stylus-loader' ]

      config.module.rules.push
        test: /\.coffee$/,
        loader: [ 'coffee-loader' ]

      config.resolve.extensions.push '.coffee'

      return

  generate:
    minify:
      collapseBooleanAttributes: true
      collapseWhitespace: true
      decodeEntities: true
      minifyCSS: true
      minifyJS: true
      processConditionalComments: true
      removeAttributeQuotes: false
      removeComments: true
      removeEmptyAttributes: true
      removeOptionalTags: true
      removeRedundantAttributes: true
      removeScriptTypeAttributes: true
      removeStyleLinkTypeAttributes: true
      removeTagWhitespace: false
      sortAttributes: true
      sortClassName: false
      trimCustomFragments: true
      useShortDoctype: true

  render:
    gzip:
      level: 9

    bundleRenderer:
      shouldPreload: (file, type) ->
        ['script', 'style', 'font'].includes type
