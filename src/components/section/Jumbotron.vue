<template lang="pug">
  v-jumbotron
    v-container(fill-height)
      v-layout(align-center)
        v-flex
          h3.display-3 Welcome to the site
          i.fas.fa-comments
          span.subheading Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.
          v-divider.my-3
          .title.mb-3 Check out our newest features!
          v-btn.mx-0(color="primary" large @click="seeMore") See more
</template>

<script>
  export default {
    methods: {
      seeMore () {
        window.open(`https://vuetifyjs.com`, `_blank`)
      }
    }
  }
</script>


