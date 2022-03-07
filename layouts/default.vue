<template>
    <v-app>
        <nav-bar title="Add tokens">
          <template v-slot:menu-icon>
            <nav-icon @click:icon="drawer = !drawer"></nav-icon>
          </template>
        </nav-bar>

        <navigation-drawer :drawer="drawer" @update:drawer="onDrawerUpdate"></navigation-drawer>

        <main-body>
          <template v-slot:children>
            <nuxt />
          </template>
        </main-body>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  head() {
    // https://i18n.nuxtjs.org/seo
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
})
export default class DefaultLayout extends Vue {
    drawer = false;

    onDrawerUpdate(value: boolean) {
      this.drawer = value
    }
}
</script>

<style scoped>
.list-item {
    text-decoration: none;
}
</style>
