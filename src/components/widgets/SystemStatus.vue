<template>
  <footer class="mb-1 mx-3 small" style="position: fixed; bottom: 0">
    <p>
      <font-awesome-icon icon="circle" v-bind:class="this.systemStatusClass" />
      {{ this.getSystemStatus() }}<br />
      <small class="text-secondary">
        <font-awesome-icon icon="server" class="mr-1" v-bind:class="this.systemStatus" /> {{ this.$backend.getHostname() }} <br />
      </small>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'SystemStatus',
  props: ['systemStatus'],
  computed: {
    systemStatusClass: function() {
      if (this.systemStatus === 'online') {
        return 'online'
      } else if (this.systemStatus === 'booting') {
        return 'booting'
      } else {
        return 'offline'
      }
    },
  },
  methods: {
    getSystemStatus () {
      if (this.systemStatus === 'online') {
        return 'System online'
      } else if (this.systemStatus === 'booting') {
        return 'Booting...'
      } else {
        return 'System offline'
      }
    }
  }
}
</script>

<style scoped>
.online {
  color: rgb(0, 204, 0);
}
.offline {
  color: rgb(170, 20, 20);
}
.booting {
  color: rgb(180, 141, 56);
}
</style>
