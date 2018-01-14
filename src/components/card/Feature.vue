<template lang="pug">
  div.column.is-4
    div.card
      div.card-image.has-text-centered
        icon(:icon="icon")
      div.card-content
        div.content
          h4 {{title}}
          p {{content}}
          p
            a(href="#") Learn more
</template>

<script>
  import Icon from '~components/general/Icon'

  export default {
    components: { Icon },
    props: ['icon', 'title', 'content']
  }
</script>

<style lang="stylus" scoped>
.card
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18)
  margin-bottom: 2rem

.card-image > .fa
  font-size: 8rem
  padding-top: 2rem
  padding-bottom: 2rem
  color: #209cee

.card-content .content
  font-size: 14px
  margin: 1rem 1rem

.card-content .content h4
  font-size: 16px
  font-weight: 700
</style>

