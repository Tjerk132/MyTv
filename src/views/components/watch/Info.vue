<template>
    <v-container class="pl-0 pt-2 pb-0">
        <video-title :title='title' />
        <v-row no-gutters>
            <v-col
              lg="5"
              md="12"
              sm="12"
              cols="12"
            >
              <v-container fill-height fluid>
                <v-row>
                  <v-col class="pa-0">
                    <video-stats :views='543.833' date="Mar 23, 2020" />
                  </v-col>
                </v-row>
               </v-container>
            </v-col>
            <v-col
              lg="7"
              md="12"
              sm="12"
              cols="12"
            >
               <video-options :likes='332' :dislikes='18' />
            </v-col>
        </v-row>
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
    components: { 
        VideoTitle: () => import('./VideoTitle'),
        VideoOptions: () => import('./VideoOptions'),
        VideoStats: () => import('./VideoStats')
    },

}
</script>

<style>
</style>