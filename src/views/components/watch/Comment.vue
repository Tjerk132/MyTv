<template>
   <v-row class="pb-5">
          <v-col
            lg="1"
            md="2"
            sm="2"
            cols="2"
          >
            <avatar :channelName='comment.channelName' :size="48" />         
          </v-col>
          <v-col
            lg="11" 
            md="10" 
            sm="10"
            cols="10"
            class="pt-0"
          >
                <v-row class="pl-1">
                    <v-col
                      cols="12"
                      class="pb-0"
                    >
                        <channel-link :channelName='comment.channelName' />
                        <h4 class="pb-1">
                            {{comment.content}}
                        </h4>
                    </v-col>
                    <v-col
                      lg="4"
                      md="6"
                      sm="7"
                      cols="11"
                      class="pa-0"
                    >
                      <v-row no-gutters>
                          <video-option :title='`${comment.likes}`' icon='mdi-thumb-up' :horizontal='true' /> 
                          <video-option :title='`${comment.dislikes}`' icon='mdi-thumb-down' :horizontal='true' />
                          <v-row> 
                            <v-container class="pt-1">
                                <a>REPLY</a>   
                            </v-container>    
                          </v-row>
                      </v-row>  
                    </v-col>
                    <v-container v-if="comment.replies" class="pt-1">
                      <v-icon 
                          color='primary'
                          size="20"
                      >
                          mdi-menu-down
                      </v-icon>
                      <a v-text="`View ${comment.replies} replies`"></a>
                    </v-container>
                </v-row>
          </v-col>
      </v-row>
</template>

<script>
export default {
    props: {
        comment: {
            required: true
        }
    },
    components: {
        Avatar: () => import('../Avatar'),
        ChannelLink: () => import('../ChannelLink'),
        VideoOption: () => import('../VideoOption')
    }
}
</script>

<style scoped>
    .comment-sentiment {  
      /* padding-left: 10px; */
    }
    a {
        text-decoration: none;  
        font-weight: bold;
    }  
    @media screen and (max-width: 960px) {
      .comment-sentiment {  
        /* padding-left: 10px; */
      }
    }
</style>