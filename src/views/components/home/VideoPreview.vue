<template>
  <v-row no-gutters class="video-preview">
    <v-col v-bind:cols="horizontal ? '6': '12'" class="pb-0">
      <a v-on:click='toWatch("hash93video65url234")' class="thumbnail">
        <v-img
          class="thumbnail"
          v-bind:height="horizontal ? '150' : '260'"
          lazy-src="https://picsum.photos/id/11/10/6"
          :src='randomImg()'
        >
          <video-preview-overlay-time-status :durationMillis="324870" />
        </v-img>
      </a>
    </v-col>
    <v-col class="pt-0">
      <v-row no-gutters>
          <v-col v-if="!horizontal"
           lg="2" md="3" sm="3" cols="2">
            <v-container class="pt-4 pl-1">
                <avatar :channelName='channelName' :size="45" class="mt-2" />
            </v-container>
          </v-col>
          <v-col
           lg="9" md="6" sm="7" cols="9"
           >
            <v-col class="pb-0">
                <a 
                  v-on:click='toWatch("hash93video65url234")'
                  :aria-label='title'
                  :title='title'
                >
                    <h3 color="secondary" v-text='title' />
                </a>
            </v-col>
            <v-col class="pt-0">
              <channel-link :channelName='channelName' />
                <h4>
                    11K views
                    <v-icon>mdi-circle-medium</v-icon>
                    2 days ago
                </h4>
            </v-col>
          </v-col>
          <!-- <v-spacer /> -->
          <v-col
            lg="1"
            cols="1"
            class="pt-2"
          >
            <v-container fluid>
              <v-row>
                <v-spacer/>           
                <v-icon medium right>
                  mdi-dots-vertical
                </v-icon>        
              </v-row>
            </v-container>
          </v-col>
      </v-row>  
    </v-col>    
  </v-row>
</template>

<script>
export default {
  name: "VideoPreview",
  props: {
     title: {
       type: String,
       default: 'Title'
     },
     channelName: {
       type: String,
       default: 'channelName'
     },
     horizontal: {
       type: Boolean,
       required: false,
       default: false,
     }
  },
  components: {
    Avatar: () => import('../Avatar'),
    VideoPreviewOverlayTimeStatus: () => import('./VideoPreviewOverlayTimeStatus'),
    ChannelLink: () => import('../ChannelLink')
  },
  methods: {
    toWatch(video) {
       this.$router.push({
          name: 'Watch',
          query: { v: video }
       });
    },
    randomImg() {
        let width = Math.floor(Math.random() * 300) + 200;  
        let height = Math.floor(Math.random() * 300) + 200;
        return `https://picsum.photos/${width}/${height}/`;
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;  
  }
  img {
    object-fit: contain;
  }
  .video-preview {
     padding: 8px;
     margin: 0;
     max-width: 600px;
  }
  .thumbnail {
    width: 100%;
  }
  @media screen and (max-width: 420px),
         screen and (max-height: 420px) {
    .thumbnail {
      height: 90%
    }
  }
</style>