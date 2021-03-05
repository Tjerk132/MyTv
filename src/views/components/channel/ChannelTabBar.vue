<template>
  <v-card class="ma-0" outlined color="transparent">
    <v-tabs grow
      color="white"
      background-color="transparent"
      show-arrows
      v-model="active_tab"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        v-on:click.native.stop="changeTab(tab)"
      >
         {{ tab.name }}
      </v-tab>
      <search-tab />
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  props: {
      activeTab: {
          type: String,
          required: true,
      }
  },
  components: { 
      SearchTab: () => import('./SearchTab')
  },
  data() {
      return {
        active_tab: 0,
        tabs: ['Home', 'Videos', 'Playlists', 'Community', 'Channels', 'About']
          .map((title, index) => { 
            return {
                id: index, 
                name: title.toLowerCase(), 
                component: title == 'Home' ? 'Featured' : title 
              } 
          }),
      }
   },
   mounted() {
       this.active_tab = this.tabs.findIndex(tab => tab.name == this.activeTab);
   },
   methods: {
       changeTab(tab) {
           this.$emit("change", tab);            
       }
   }

}
</script>

<style> 
</style>