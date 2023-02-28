<template>
  <div class="home">
    <movieApp></movieApp>
    <movieDetails></movieDetails>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import movieApp from "@/components/movieApp/movieApp.vue";

@Component({
  components: {
    movieApp,
  },
})
export default class HomeView extends Vue {}
</script>
