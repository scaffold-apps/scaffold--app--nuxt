<template>
  <v-snackbar
    :value="snackbar"
    bottom
    :absolute="true"
    :tile="tile"
    :timeout="timeout"
    :text="text"
    :color="color"
  >
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        v-if="showButton"
        text
        v-bind="attrs"
        @click="closeAlert"
      >
        {{ $t('toast.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class GlobalAlerts extends Vue {
  get snackbar () {
    return this.$store.getters["toast/show"]
  }

  get timeout () {
    return this.$store.getters["toast/timeout"]
  }

  get tile () {
    return this.$store.getters["toast/tile"]
  }

  get text () {
    return this.$store.getters["toast/text"]
  }

  get message() {
    return this.$store.getters["toast/message"]
  }

  get color() {
    return this.$store.getters["toast/color"]
  }

  get showButton() {
    return this.$store.getters["toast/showButton"]
  }

  closeAlert() {
    this.$store.commit('toast/SET_VALUE', {
      item: 'show',
      value: false
    })
  }
}
</script>
