<template>
  <v-container class="pa-0">
    <video-preview 
      title="RHODES vs. Felix Jaehn - Your Soul (Holding On)"
      channelName="MrRevillz"
      :horizontal='$vuetify.breakpoint.mdAndUp'
    />
    <v-row v-for="x in 4" :key="x">
      <v-col class="pb-0" cols="12">
        <v-row>
          <v-col lg="2" cols="5">
            <v-container fill-height class="pa-0">
              Popular Uploads
            </v-container>
          </v-col>
          <v-col lg="2" cols="6" class="pa-0">
            <video-option title="PLAY ALL" icon='mdi-play' :horizontal='true'/>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-0">
         <v-sheet
         height="200"
         color="transparent"
         >
            <v-slide-group
              v-bind:show-arrows='$vuetify.breakpoint.mdAndUp ? true : false'
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                class="pa-1"
              >
                    <v-card 
                        class="rounded-sm ma-0 pa-1"
                        outlined color="transparent"
                        width="200"
                    >
                      <v-card-title class="pb-5 pl-0 pr-0">
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            width="100%"
                            height="120"
                            :src='randomImg()'      
                        >
                          <video-preview-overlay-time-status :durationMillis="414870"/>
                        </v-img> 
                      </v-card-title>
                      <v-card-subtitle class="video-info pa-0">   
                        <h5>
                        RHODES vs. Felix Jaehn - Your Soul (Holding On)
                        </h5>                
                        <video-stats 
                          :views='199.452'
                          date="Mar 23, 2020"
                          :fontSize='12'
                        />
                      </v-card-subtitle>
                    </v-card>
              </v-slide-item>
            </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <channels />
  </v-container>
</template>

<script>
export default {

  components: {
    VideoPreviewOverlayTimeStatus: () => import('../../home/VideoPreviewOverlayTimeStatus'),
    VideoOption: () => import('../../VideoOption'),
    VideoStats: () => import('../../watch/VideoStats.vue'),
    Channels: () => import('./Channels'),
    VideoPreview: () => import('../../home/VideoPreview')
 },
  methods: {
    randomImg() {
        let width = Math.floor(Math.random() * 300) + 200;  
        let height = Math.floor(Math.random() * 300) + 200;
        return `https://picsum.photos/${width}/${height}/`;
    }
  }

}
</script>

<style scoped>
  .video-info {
    text-align: left;
  }
  .v-slide-group__prev, .v-slide-group__next {
    color: red;
  }
</style>