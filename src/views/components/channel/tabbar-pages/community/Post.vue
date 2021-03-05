<template>

<v-card
    max-width="800"
    class="my-2"
  >

    <v-row>
        <v-col 
            lg="12"
            cols="12"
        >
            <v-row no-gutters>  
                <v-col
                    lg="1"
                    cols="2"
                >
                    <v-container fluid>
                        <v-row>
                            <v-spacer/>
                            <v-col class="pa-0">
                                <avatar :channelName='channelName'
                                    v-bind:size="$vuetify.breakpoint.mdAndUp ? 50 : 40"
                                />              
                            </v-col>
                            <v-spacer/>
                        </v-row>    
                    </v-container>
                </v-col>
                <v-col
                    lg="10"
                    cols="8"      
                >   
                    <v-row>
                        <v-col>
                            <v-container class="pa-0">
                                <channel-link :channelName='channelName' />
                                <span>3 weeks ago</span>
                                <h4 class="pb-1">
                                    Wow guys, look at this awesome image!
                                </h4>
                            </v-container>
                            <v-img
                                class="post-image"                           
                                :src="randomImg()"
                            ></v-img>   
                            <v-row> 
                                <v-col
                                    lg="2"
                                    sm="2"
                                    cols="4"
                                    class="pr-0"
                                >
                                 <video-option :title='`${likes}`' icon='mdi-thumb-up' :horizontal='true'  /> 
                                </v-col>
                                <v-col
                                    lg="2"
                                    sm="2"
                                    cols="4"
                                    class="pl-0 pr-0"
                                >
                                    <video-option :title='`${dislikes}`' icon='mdi-thumb-down' :horizontal='true' />            
                                </v-col>
                                <v-col 
                                    lg="2"
                                    sm="2"
                                    cols="4"
                                    class="pl-0"
                                >
                                    <video-option title="36" icon="mdi-message-reply-text" :horizontal='true' />
                                </v-col>
                            </v-row>
                            
                        </v-col>
                    </v-row>
                </v-col>  
                <v-col 
                    lg="1"
                    cols="1"
                >
                    <v-container>
                        <v-icon medium right>
                        mdi-dots-vertical
                        </v-icon>    
                    </v-container>     
                </v-col>
            </v-row>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    props: {
        channelName: {
            type: String,
            required: true
        },
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
        Avatar: () => import('../../../Avatar'),
        ChannelLink: () => import('../../../ChannelLink'),
        VideoOption: () => import('../../../VideoOption')
    },
    methods: {
      randomImg() {
        let width = Math.floor(Math.random() * 600) + 200;  
        let height = Math.floor(Math.random() * 300) + 200;
        return `https://picsum.photos/${width}/${height}/`;
      }
    }

}
</script>

<style scoped>
  .post-image {
      height: 350px;
  }
  @media screen and (max-width: 840px) {
    .post-image {
        height: 150px;
    }
  }

</style>