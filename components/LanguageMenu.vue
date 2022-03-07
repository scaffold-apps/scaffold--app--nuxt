<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LanguageMenu extends Vue {
  localeGroup = this.$i18n.localeCodes.indexOf(this.$i18n.locale)
}
</script>
