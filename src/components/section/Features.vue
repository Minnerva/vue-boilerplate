<template lang="pug">
  section.container
    div.columns.features
      card-feature(v-for="(feature, cardIndex) in features", :key="cardIndex", :icon="feature.icon", :title="feature.title", :content="feature.content")
</template>

<script>
  import CardFeature from '~components/card/Feature'

  export default {
    components: { CardFeature },
    data () {
      return {
        features: [
          { icon: 'paw', title: 'Mauris vulputate', content: 'Ut eu malesuada leo. Nam ante nunc, vestibulum sit amet odio ac, aliquam semper massa. In hac habitasse platea dictumst.'},
          { icon: 'id-card', title: 'Nollis viverra', content: 'Donec varius nulla ut quam accumsan pretium. Donec eget nisi vel sem feugiat tempor quis at nibh. Nulla consequat in purus sit amet ultrices.'},
          { icon: 'rocket', title: 'Pellentesque et', content: 'In hac habitasse platea dictumst. Pellentesque et est auctor, accumsan orci ac, placerat velit.'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.features
  padding: 5rem 0
</style>

