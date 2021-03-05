<template>
  <v-container
    id="videos"
    fluid
    tag="section"
  >
    <menu-selector :items='[ "Uploads","All videos","Post live streams"]' icon='mdi-menu-down' />

    <v-row no-gutters>
      <v-col
      lg="3"
      md="4"
      sm="6"
      cols="12"
        v-for="n in 16"
        :key="n"
      >    
        <video-preview 
          title="RHODES vs. Felix Jaehn - Your Soul (Holding On)"
          channelName="MrRevillz"
        /> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    VideoPreview: () => import('../../home/VideoPreview'),
    MenuSelector: () => import('../../MenuSelector')
  },
 
}
</script>

<style>

</style>