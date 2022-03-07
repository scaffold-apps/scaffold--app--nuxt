<template>
  <v-main>
    <v-container fluid>
      <slot name="children"></slot>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MainBody extends Vue {
}
</script>
