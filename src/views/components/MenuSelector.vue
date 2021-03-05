<template>
    <v-menu offset-overflow>
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            max-width="160"
            v-bind="attrs"
            v-on="on"
            class="ml-1"
        >
        {{initialTitle ? initialTitle : options[id]}}
        <v-icon
            right
            dark
        >
        {{icon}}
        </v-icon>
        </v-btn>
    </template>
    <v-list>
        <v-list-item
            v-for="(item, index) in computedItems"
            :key="index"
            v-on:click='selectItem(item)'
        >
        <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
    </v-list>
</v-menu>
</template>

<script>
export default {
  props: {
      items: {
          type: Array,
          required: true,  
      },
      selected: {
          type: Number,
          required: false,
          default: 0,
      },
      icon: {
          type: String,
          required: false,
          default: 'mdi-menu'
      },
      removeSelected: {
          type: Boolean,
          required: false,
          default: true
      },
      initialTitle: {
          type: String,
          required: false,
          default: undefined
      }
  },
  data() {
    return {
      id: this.selected,
      options: this.items
    }
  },
  methods: { 
    selectItem(item) {
      this.id = this.options.indexOf(item);
    }
  },
  computed: {
    computedItems() {
        if(this.removeSelected) {
          return this.options.slice(0, this.id)
            .concat(this.options.slice(this.id + 1));
        }
        else return this.options;
    }
  }
}
</script>

<style>

</style>