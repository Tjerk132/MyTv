<template>
    <v-container
    id="playlists"
    fluid
    tag="section"
  >
    <v-row>
      <v-col 
        lg="6"
        cols="7"
      >
        <v-container class="pl-0">
          <h3>
          Created Playlists
          </h3>
        </v-container>
      </v-col>
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
      <v-col lg="1" cols="5">
         <menu-selector initialTitle='SORT BY' :removeSelected='false' :items='[ "Date added(newest)", "Last video added" ]' icon='mdi-sort-variant' 
         />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        lg="2"
        md="3"
        sm="4"
        cols="6"
        v-for="n in 15"
        :key="n"
      >    
          <playlist />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    MenuSelector: () => import('../../MenuSelector'),
    Playlist: () => import('./playlists/Playlist')
  }

}
</script>

<style>

</style>