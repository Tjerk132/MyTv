<template>
   <v-row>
      <v-col>    
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            width="90%"
            :src='randomImg()'
            class="playlist-image"
          >
            <playlist-overlay-stats />
          </v-img>
          <h4>EDM Playlist full</h4>
          <a>VIEW FULL PLAYLIST</a>  
      </v-col>
    </v-row>
</template>

<script>
export default {
  components: {
    PlaylistOverlayStats: () => import('./PlaylistOverlayStats')
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
  .playlist-image {
    height: 180px;
  }
    @media screen and (max-width: 420px) {
    .playlist-image {
      height: 100px;
    }
  }
</style>