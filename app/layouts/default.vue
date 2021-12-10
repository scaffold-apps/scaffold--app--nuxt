<template>
    <v-app>
        <v-app-bar app elevation="0">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Header</v-app-bar-title>
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
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item
                        v-for="({ text, url }, index) in links"
                        :key="index"
                        :to="url"
                        nuxt
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

@Component
export default class DefaultLayout extends Vue {
    drawer = false;
    group = null;
    links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'About',
            url: '/about',
        },
    ]

    @Watch('group')
    onGroupChanged() { this.drawer = false }
}
</script>

<style scoped>
.list-item {
    text-decoration: none;
}
</style>