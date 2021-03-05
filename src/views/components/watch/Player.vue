<template>
  <v-container class="pa-0">
      <v-img
        class="player"
        width="100%"
        lazy-src="https://picsum.photos/id/11/10/6"
        :src='randomImg()'
      >
      </v-img>  
  </v-container>
</template>

<script>  
export default {
  methods: {
    randomImg() {
      let width = Math.floor(Math.random() * 10) + 600;  
      let height = Math.floor(Math.random() * 10) + 600;
      return `https://picsum.photos/${width}/${height}/`;
    }
  }
}
</script>

<style scoped>
  .player {
    height: 500px;
  }
    @media screen and (max-width: 640px) {
      .player {
        height: 220px;
      }
    }
</style>