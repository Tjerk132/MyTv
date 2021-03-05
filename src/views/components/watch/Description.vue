<template>
  <v-container class="pa-2">
      <v-row>
          <v-col
            lg="1"
            md="2"
            sm="2"
            cols="2"
          >
            <avatar :channelName='channelName' :size="48" class="mt-5" /> 
          </v-col>
          <v-col
            class="pa-3"
            lg="9" 
            md="8" 
            sm="6"
            cols="5"
          >
          <v-container class="channel-info">
            <channel-link :channelName='channelName' />
            <h5>
                1.14k subscribers
            </h5>
          </v-container>
            <h4>
                Description here blah blah blah blah
            </h4>
            <h4>
                blah blah blah blah blah blah
            </h4>
            <v-container class="show-more">
              <a>
                SHOW MORE
              </a>
            </v-container>
          </v-col>
          <v-col
            lg="2" 
            md="2" 
            sm="4"
            cols="5"
          >
            <v-container class="subscribe">
                <v-btn
            
                  depressed
                  color="error"
                >
                SUBSCRIBE
                </v-btn>
            </v-container>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    props: {
        channelName: {
            type: String,
            required: true,
        }
    },
    components: {
        Avatar: () => import('../Avatar'),
        ChannelLink: () => import('../ChannelLink')
    }
}
</script>

<style scoped>
    .channel-info {
      padding: 0 0 10px 0;
    }
    .show-more {
      padding: 0;
      margin-top: 8px;
    }
    .show-more > a {
      text-decoration: none;  
      font-weight: bold;
      font-size: 14px;
      color: gray;
    } 
    .subscribe {
      padding: 0;
      font-weight: bold;
    }
</style>  