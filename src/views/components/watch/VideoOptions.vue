<template>
 <v-row no-gutters>

     <v-layout column>
      <v-layout row class="ma-0">
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
          <video-option :title='`${likes}`' icon='mdi-thumb-up' :horizontal='$vuetify.breakpoint.mdAndUp' /> 
          <!-- <v-spacer/> -->
          <video-option :title='`${dislikes}`' icon='mdi-thumb-down' :horizontal='$vuetify.breakpoint.mdAndUp' />
          <!-- <v-spacer /> -->
      </v-layout>
      <v-layout row class="ma-0" v-if="$vuetify.breakpoint.mdAndUp">
          <v-progress-linear
              :aria-label='`${likes} / ${dislikes}`'
              :title='`${likes} / ${dislikes}`'
              :value='`${sentimentRatio}`'  
              height="4" 
              color="grey"  
          />
      </v-layout>
     </v-layout>
      <video-option title="SHARE" icon='mdi-share' /> 
      <video-option title="SAVE" icon='mdi-playlist-plus' />
      <v-icon size="22">mdi-dots-horizontal</v-icon>
 </v-row>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
  },
  components: {
    VideoOption: () => import('../VideoOption'),
  },
  data() {
    return {
      sentimentRatio: {
        type: Number
      }
    }
  },
  mounted() {
    this.sentimentRatio = (100 / (this.likes + this.dislikes) * this.likes);
  }

}
</script>

<style scoped>
</style>