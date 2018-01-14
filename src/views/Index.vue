<template lang="pug">
  div
    section-hero
    section-announcement
    section-features
</template>

<script>
  import SectionHero from '~components/section/Hero'
  import SectionAnnouncement from '~components/section/Announcement'
  import SectionFeatures from '~components/section/Features'

  export default {
    components: { SectionHero, SectionAnnouncement, SectionFeatures }
  }
</script>
