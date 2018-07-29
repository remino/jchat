module.exports =
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
