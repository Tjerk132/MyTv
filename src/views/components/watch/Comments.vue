<template>
  <v-row no-gutters>
  <v-expansion-panels multiple accordion flat
        v-bind:value="$vuetify.breakpoint.mdAndUp ? [0] : 0"  
        v-bind:readonly="$vuetify.breakpoint.mdAndUp ? true : false"  
    >
        <v-expansion-panel>
            <v-expansion-panel-header
             v-bind:expand-icon="$vuetify.breakpoint.mdAndUp ? '' : 'mdi-unfold-more-horizontal'"  
             class="pa-0"
            >   
                <v-row no-gutters v-if="$vuetify.breakpoint.mdAndUp" class="comments-title">
                    <v-col cols="4">
                        <v-container fill-height>
                            1,162 Comments
                        </v-container>
                    </v-col>
                    <v-col cols="4">
                        <v-container class="pa-0">
                            <video-option title="SORT BY" icon='mdi-sort-variant' /> 
                        </v-container>
                    </v-col>
                </v-row>
                <h4 v-else>
                    <span class="comments-title">Comments</span>
                    <v-icon x-small color="white">mdi-circle-medium</v-icon>
                    <span class="comments-count">1,162</span>
                </h4>
                <v-spacer/>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- write own comment -->
              <v-row>
                <v-col
                    lg="1"
                    md="2"
                    sm="2"
                    cols="2"
                >
                    <avatar :channelName='channelName' :size="48" class="mt-2" />
                </v-col>
                <v-col
                    
                    lg="11" 
                    md="10" 
                    sm="10"
                    cols="10"
                    class="pl-7"
                >             
                    <v-text-field
                        placeholder="Add a public comment..."
                    >
                    </v-text-field> 
                </v-col>
              </v-row>
              <!-- write own comment -->
              <comment v-for="(comment, i) in comments" :key="i" :comment='comment' />
            </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>


<script>
export default {
    props: {
        channelName: {
            type: String,
            required: true
        }
    },
    components: {
        VideoOption: () => import('../VideoOption'),
        Avatar: () => import('../Avatar'),
        Comment: () => import('./Comment')
    },
    data() {
        return {
            comments: [
                {
                    channelName: 'MrRevillz',
                    content: 
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!',
                    replies: 6,
                    likes: 23,
                    dislikes: 8,
                },
                {
                    channelName: 'ExtremeXSLAS',
                    content: 
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!',
                    replies: 2,
                    likes: 123,
                    dislikes: 4,
                },
                {
                    channelName: 'MrRevillz',
                    content: 
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!',
                    replies: 3,
                    likes: 93,
                    dislikes: 4,
                },
                {
                    channelName: 'Derek Samson',
                    content: 
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!',
                    replies: 0,
                    likes: 991,
                    dislikes: 4,
                },
                {
                    channelName: 'Fereand Walles',
                    content: 
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!' +
                    'Wow amazing very good! Wow amazing very good!',
                    replies: 2,
                    likes: 222,
                    dislikes: 1,
                }
            ]
        }
    },
}
</script>

<style scoped>
    .comments-title {
        color: white;
        font-weight: 400;
        font-size: 15px;
    }
    .comments-count {
        color: lightgray;
        font-weight: 400;
        font-size: 12px;
    }
</style>