<template>
    <span class="playlist-stats">
        <v-container fluid fill-height>   
          <v-row>
            <v-spacer/>
            <v-col>
               <h4>
                156
                </h4>
                <v-icon size="25">
                mdi-playlist-play
                </v-icon> 
            </v-col>
            <v-spacer/>
          </v-row>
        </v-container>    
    </span>
</template>

<script>
export default {

}
</script>

<style scoped>
    .playlist-stats {
        background-color: black;
        opacity: 0.75;
        position: absolute;
        height: 100%;
        width: 35%;
        right: 0;
    }

</style>