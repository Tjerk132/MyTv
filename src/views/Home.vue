<template>
  <v-container
    id="home"
    fluid
    tag="section"
    class="home"
  >
     <v-row no-gutters>
      <v-col
      lg="3"
      md="6"
      sm="6"
      cols="12"
        v-for="n in 20"
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
    name: 'Home',
    components: {
      VideoPreview: () => import('./components/home/VideoPreview')
    },
  }
</script>

<style scoped>
  .home {
    padding: 10px 50px;
  }
  @media screen and (max-width: 420px),
         screen and (max-height: 420px) {
    .home {
        padding: 0px;
    }
  }
</style>
