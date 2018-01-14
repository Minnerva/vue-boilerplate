<template lang="pug">
  section.hero.is-info.is-medium.is-bold
    hero-head
    hero-body
</template>

<script>
  import HeroHead from '~components/section/HeroHead'
  import HeroBody from '~components/section/HeroBody'

  export default {
    components: { HeroHead, HeroBody }
  }
</script>
