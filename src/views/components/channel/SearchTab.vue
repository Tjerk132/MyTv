<template>
    <v-tab>
        <v-icon left
            v-on:click='showSearchBar = !showSearchBar'
            aria-label='Click to search'
        >
         mdi-magnify
        </v-icon>
        <v-text-field
            v-model='query' 
            ref="query-field"
            v-on:keyup.enter='search()'
            v-if='showSearchBar'
            placeholder="Search"
        ></v-text-field>
    </v-tab>
</template>

<script>
export default {
   data() {
     return this.initialState();
   },

   methods: {
       initialState () {
         return {
           showSearchBar: false,
           query: ''
         }
       },
       search() {
          //  handle with this.query, clear after
            Object.assign(this.$data, this.initialState());
       }
   }
}
</script>

<style>

</style>