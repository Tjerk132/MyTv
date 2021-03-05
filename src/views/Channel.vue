<template>
  <v-container fluid fill-height class="pa-0">
      <v-img
          class="channel-banner"
          width="100%"
          lazy-src="https://picsum.photos/id/11/10/6"
          :src='randomImg()'
      >
      </v-img>
      <v-row class="channel-header">
        <v-col cols="12" class="pa-0">
          <v-row class="ma-0">
              <v-col
                lg="1"
                md="2"
                sm="2"
                cols="2"
                class="channel-avatar"
              >         
                <v-layout>
                  <avatar :channelName='channel' class="mt-5"
                      v-bind:size="$vuetify.breakpoint.mdAndUp ? 70 : 50"
                  />
                </v-layout>
              </v-col>
              <v-col
                lg="9" 
                md="7" 
                sm="7"
                cols="5"
                class="pa-0"
              >
              <v-container>
                <channel-link :channelName='channel' />
                <h4>
                    1.14k subscribers
                </h4>
              </v-container>
              </v-col>
              <v-col
                lg="2" 
                md="3" 
                sm="3"
                cols="5"
                class="pa-0"
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
        </v-col>
        <v-col class="pa-0">
            <channel-tab-bar v-on:change='changeTab($event)' :activeTab='tab' />
        </v-col>
      </v-row>
      <v-container fluid class="channel-content">
        <component :is="currentTab" />
      </v-container>
  </v-container>
</template>

<script>
import * as tabBarPages from './components/channel/tabbar-pages';

export default {
    props: {
      channel: {
        type: String,
        required: true,
      },
      tab: {
        type: String,
        required: false,
        default: 'Featured'
      }
    },
    components: {
      Avatar: () => import('./components/Avatar'),
      ChannelLink: () => import('./components/ChannelLink'),
      ChannelTabBar: () => import('./components/channel/ChannelTabBar'),
      ...tabBarPages
    },
    data() {
      return {
        currentTab: this.tab
      }
    },
    methods: {
      randomImg() {
        let width = Math.floor(Math.random() * 500) + 600;   
        let height = Math.floor(Math.random() * 150) + 100;
        return `https://picsum.photos/${width}/${height}/`;
      },
      changeTab(tab) {
        this.toTab(tab.component.toLowerCase());
        this.currentTab = tab.component;
      },
      toTab(tab) {
        this.$router.push({
            name: 'Channel',
            params: { c: this.channel, t: tab }
        });     
      },
    },
    // watch: {
    //   '$route.params.t'(newTab, oldTab) {
    //     console.log('from oldtab= '+oldTab+' to newTab='+newTab);
    //     this.tab = newTab;
    //   }
    // },
}
</script>

<style scoped>
  .channel-banner {
    height: 200px;
  }
  .channel-header {
    background-color: rgb(18, 20, 20);
    padding: 0 3% 0 3%;
    margin: 0;
    width: 100%;
  }
  .channel-content {
    background-color: rgb(11, 12, 13);
    height: 100%;
  }
  .channel-avatar {
    margin-top: -24px;
  }
  .subscribe {
    padding: 20px 0 0 10px;
  }
  @media screen and (max-width: 420px) {
    .channel-banner {
      max-height: 120px;  
    }
    .channel-header {
      padding: 0;
    }
  }

</style>