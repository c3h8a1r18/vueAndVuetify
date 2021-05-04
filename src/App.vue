<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
          <p>align center d flex</p>
      </div>
      <v-spacer></v-spacer>
      <p>there was a button</p>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {


}
</script>
