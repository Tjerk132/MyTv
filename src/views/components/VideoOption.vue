<template>
    <v-row no-gutters class="ma-0"> 
        <v-col
          lg="4"
          md="4"
          v-bind:sm="horizontal ? '4' : '12'"
          v-bind:cols="horizontal ? '4' : '12'"
        >
            <v-btn
              text
              icon
              large
              v-bind='binding'
              v-on='on' 
            >
                <v-icon 
                :color='color'
                v-bind:size="$vuetify.breakpoint.mdAndUp ? 24 : 18"
                >
                    {{icon}}
                </v-icon>
            </v-btn>
        </v-col>
        <v-col 
            lg="4"
            md="4"
            v-bind:sm="horizontal ? '4' : '12'"
            v-bind:cols="horizontal ? '4' : '12'"
            class="video-option-title"
        >   
            <v-container fill-height class="pa-0">
                <h5 v-text='title' 
                  :style="`color:${color};`" 
                />    
            </v-container>  
        </v-col>
        <!-- <v-spacer /> -->
    </v-row>

</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: undefined
        },
        icon: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false,
            default: ''
        },
        horizontal: {
            type: Boolean,
            required: false,
            default: false
        },
        binding: {         
            required: false
        },
        on: {
            required: false,
        }
    },


}
</script>

<style scoped>
    .video-option-title {
        /* text-align: center; */
        padding-left: 14px;
    }
    @media screen and (max-width: 420px) {
        .video-option-title {
            padding-left: 20px;
        }
    }

</style>