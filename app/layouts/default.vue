<template>
    <v-app>
        <v-app-bar app elevation="0">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Header</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-menu
              left
              bottom
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-translate</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item-group v-model="localeGroup" active-class="deep-purple--text text--accent-4">
                <v-list-item
                  v-for="locale in $i18n.locales"
                  :key="locale.code"
                  @click="$i18n.setLocale(locale.code)"
                >
                  <v-list-item-title>{{ locale.name }}</v-list-item-title>
                </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" absolute bottom temporary>
            <v-sheet color="grey lighten-3" elevation="0" height="100" width="100%">
                <v-container fill-height height="100%">
                    <v-row justify="center" align="center">
                        <v-avatar color="purple" size="56">
                            <span class="white--text">JD</span>
                        </v-avatar>
                    </v-row>
                </v-container>
            </v-sheet>
            <v-list nav dense>
                <v-list-item-group v-model="linksGroup" active-class="deep-purple--text text--accent-4">
                    <v-list-item
                        v-for="({ text, route }, index) in links"
                        :key="index"
                        :to="localePath(route, $i18n.locale)"
                        nuxt
                        exact
                        class="list-item"
                    >
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component({
  head() {
    // https://i18n.nuxtjs.org/seo
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  }
})
export default class DefaultLayout extends Vue {
    drawer = false;
    linksGroup = null;
    localeGroup = this.$i18n.localeCodes.indexOf(this.$i18n.locale)

  get links () {
      return [
        {
          text: this.$t('nav.home'),
          route: 'index'
        },
        {
          text: this.$t('nav.about'),
          route: 'about',
        },
      ]
    }

    @Watch('linksGroup')
    onGroupChanged() { this.drawer = false }
}
</script>

<style scoped>
.list-item {
    text-decoration: none;
}
</style>
