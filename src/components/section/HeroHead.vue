<template lang="pug">
  div.hero-head
    nav.navbar
      div.container
        div.navbar-brand
          a.navbar-item(href="/")
            img(src="http://bulma.io/images/bulma-type-white.png", alt="Logo")
          span.navbar-burger.burger(data-target="navbarMenu")
            span
            span
            span
        div#navbarMenu.navbar-menu
          div.navbar-end
            a.navbar-item.is-active Home
            a.navbar-item Examples
            a.navbar-item Documentation
            span.navbar-item
              a.button.is-white.is-outlined.is-small(href="https://github.com/Minnerwa/vue-boilerplate", target="_blank")
                span.icon
                  i.fa.fa-github
                span View Template Source
</template>
