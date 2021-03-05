<template>
  <v-container
    id="watch"
    fluid
    tag="section" 
  >
     <v-row>
      <v-col
       lg="8"
       md="8"
       sm="12"
       cols="12"
      >
        <player />
        <info title="Video title ft. abcd & fdha"/>
        <v-divider></v-divider>
        <description :channelName='channelName' />
        <v-divider></v-divider>
        <comments :channelName='channelName' />
      </v-col>
      <v-col 
        lg="4" 
        md="4" 
        sm="0"
        cols="0"
        class="pt-1"
      >
        <video-preview v-for="x in 20" :key="x" 
          title="RHODES vs. Felix Jaehn - Your Soul (Holding On)"
          :channelName='channelName'
          :horizontal='$vuetify.breakpoint.mdAndUp'
        />
      </v-col>
     </v-row>
  </v-container>
</template>

<script>
export default {
    // url to retrieve info
    props: {
      video: {
        type: String,
        required: true,
      },
    },
    components: {
      Player: () => import('./components/watch/Player'),
      Info: () => import('./components/watch/Info'),
      Description: () => import('./components/watch/Description'),
      Comments: () => import('./components/watch/Comments'),
      VideoPreview: () => import('./components/home/VideoPreview')
    },
    data() {
      return {
        channelName: 'MrRevillz'
      }
    }
}
</script>

<style scoped>
</style>