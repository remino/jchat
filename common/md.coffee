export default
  mounted: -> @addListeners()
  beforeDestroy: -> @removeListeners()

  watch:
    content: 'contentUpdated'

  methods:
    addListeners: ->
      @_links = [].slice.call @$el.getElementsByTagName 'a'
      link.addEventListener 'click', @navigate, false for link in @_links

    contentUpdated: ->
      @removeListeners()
      @$nextTick -> @addListeners()

    navigate: (event) ->
      href = event.target.getAttribute 'href'

      if href && href[0] == '/'
        event.preventDefault()
        @$router.push href

    removeListeners: ->
      link.removeEventListener 'click', @navigate, false for link in @_links
      @_links = []
