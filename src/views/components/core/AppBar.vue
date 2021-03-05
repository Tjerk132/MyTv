<template>
  <v-app-bar id="app-bar" fixed app z-index="2" flat height="65">
    <v-btn text elevation="1" fab @click="setDrawer(!drawer)">
      <v-icon size="25">
        mdi-menu
      </v-icon>
    </v-btn>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light ml-1"
      v-text="$route.name"
    />

      <v-spacer />
      <v-text-field v-if="$vuetify.breakpoint.mdAndUp"
        class="text--darken-3 mt-5" 
        placeholder="Search" 
        append-outer-icon="mdi-magnify"
      >
      </v-text-field>
      <v-spacer/>
      <v-btn text fab>
        <v-icon size="22">
          mdi-video-plus
        </v-icon>
      </v-btn>
      <v-btn text fab>
        <v-icon size="22">
          mdi-apps
        </v-icon>
      </v-btn>
      <v-btn text fab>
        <v-icon size="22">
          mdi-bell
        </v-icon>
      </v-btn>
      <avatar channelName='This is you!' :size='28' />
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",
  components: {
    Avatar: () => import('../Avatar')
  },
  computed: {
    ...mapState(["drawer"])
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    })
  }
};
</script>