<template>
  <v-row class="about" no-gutters>
    <v-col 
      lg="7" 
      md="7"
      sm="7"
      cols="12"
    >
      <h3>Description</h3>
      <h4>Produces high quality music of all genres</h4>
      <h4>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</h4>
      <h4>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</h4>
      <h4>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</h4>
      <h4>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum</h4>

      <v-divider></v-divider>

      <h3>Details</h3>
      <h4>For business inquiries: 123@mail.com</h4>
      <h4>Location: United Kingdom</h4>

      <v-divider></v-divider>

      <h3>Links</h3>
      <v-row class="links">
        <v-col v-for="x in 5" :key="x" 
          lg="6" 
          md="6" 
          sm="6" 
          cols="6"
        >
          <a>Facebook</a>
        </v-col>
      </v-row>

    <v-divider></v-divider>

    </v-col>
    <v-col 
      lg="5"
      md="5"
      sm="5"
      cols="0"
    >
      <h3>Stats</h3>
      <h4>Joined Aug 2, 2012</h4>
      <h4>54,543,534 views</h4>
      <v-icon>mdi-flag</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about {
    padding: 16px 16px 0 16px;
  }
  h3, h4 {
    padding: 12px 0;
    font-weight: 600;
    color: white;
  }
  .links {
     padding-bottom: 8px;
  }
  @media screen and (max-width: 420px) {
    .about {
      padding: 0;  
   }
  }

</style>