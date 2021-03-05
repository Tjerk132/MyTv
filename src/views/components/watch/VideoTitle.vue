<template>
    <v-container class="video-info-container">
        <span v-if="$vuetify.breakpoint.mdAndUp">
            <a
                v-for="x in 3" 
                :key="x" 
                v-text="`#tag${x} `"
            />
        </span>
        <h1 v-text='title' class="video-info-title"/>
    </v-container>
</template>

<script>
export default {
    props: {
      title : {
          type: String,
          required: true,
      }
    },
}
</script>

<style scoped>
    .video-info-container {
        padding: 0;
        margin-bottom: -10px;
    }
    .video-info-title {
      color: white;
      font-weight: normal;
      font-size: 22px;
      margin: 0;
    }
      @media screen and (max-width: 420px) {
      .video-info-container {
          padding-bottom: 5px;
      }
    }
</style>