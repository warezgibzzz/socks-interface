<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary" v-if="isAuthorized">
        <span class="md-title">Socks interface</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full" v-if="isAuthorized">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <routing/>
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Routing from './components/shared/Routing'

export default {
  name: 'App',
  components: {Routing},
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  computed: {
    isAuthorized () {
      console.log(this.$store)
      return false
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
