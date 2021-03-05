<template>
  <v-container>
    Check out these channels!
   <v-row no-gutters class="channels">
      <v-col
      lg="2"
      md="2"
      sm="4"
      cols="6"
        v-for="n in 15"
        :key="n"
      >    
          <v-container fluid> 
            <v-layout>
               <v-spacer/>
                <avatar :channelName='channelName'
                  v-bind:size="$vuetify.breakpoint.mdAndUp ? 100 : 80"
                />          
              <v-spacer/>
            </v-layout>
          </v-container>  
          <channel-link :channelName='channelName' />
          <h5>1.42M subscribers</h5>
          <a>SUBSCRIBE</a>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    channelName: {
        type: String,
        default: 'Channel Name'
    }
  },
  components: {
    Avatar: () => import('../../Avatar'),
    ChannelLink: () => import('../../ChannelLink')
  }

}
</script>

<style scoped>
  .channels {
    text-align: center;
  }

</style>