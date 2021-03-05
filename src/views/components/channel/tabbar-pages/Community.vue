<template>
  <v-container>
    <v-row v-for="x in 10" :key="x">
      <v-col 
        cols="12"
      >
        <post channelName='MrRevillz'/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Post: () => import('./community/Post')
  }
}
</script>

<style>

</style>