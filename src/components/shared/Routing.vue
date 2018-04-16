<template>
    <md-list>
        <md-list-item v-for="(route, index) in routes" v-bind:key="index" v-bind:to="route" v-bind:index="route.index">
            <md-icon v-if="route.icon">{{route.icon}}</md-icon>
            <span class="md-list-item-text">{{ route.name }}</span>
        </md-list-item>
    </md-list>
</template>

<script>
export default {
  name: 'routing',
  computed: {
    routes: function () {
      var routes = []

      for (let i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue
        }
        let route = this.$router.options.routes[i]
        if (route.hasOwnProperty('name')) {
          routes.push(route)
        }
      }
      return routes
    }
  }
}
</script>

<style scoped>

</style>
