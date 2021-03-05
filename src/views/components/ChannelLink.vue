<template>
  <a
    v-on:click='toChannel(channelName)'
    :aria-label='channelName'
    :title='channelName'
  >
  {{channelName}}
  </a>
</template>

<script>
export default {
    props: {
        channelName: {
            type: String,
            default: 'channel'
        }
    },
    methods: {
      toChannel(channelName) {
        this.$router.push({
            name: 'Channel',
            params: { c: channelName, t: 'featured' }
        });
      },
    }

}
</script>

<style scoped>
  a {
    text-decoration: none;  
    font-weight: bold;
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    a {
      font-size: 15px;  
    }
  }

</style>