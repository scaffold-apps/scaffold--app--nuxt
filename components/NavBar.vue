<template>
  <v-app-bar app elevation="0">
    <slot name="menu-icon"></slot>
    <div class="header__title">{{ $t('header.title') }}</div>
    <v-spacer></v-spacer>
    <language-menu></language-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  @Prop(String) readonly title: string | undefined
}
</script>

<style scoped>
.header__title {
  font-size: 18px;
}
</style>
