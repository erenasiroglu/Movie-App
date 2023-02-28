<template>
  <v-container
    fluid
    class="movie-details-container"
    :style="{ backgroundColor: bgColor }"
  >
    <v-app-bar color="deep-purple accent-4" dark app>
      <v-toolbar-title>
        <router-link to="/">Movie App</router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="`${movie.title} poster`"
          class="movie-poster"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class="movie-details">
          <h1 class="title">{{ movie.title }}</h1>
          <v-divider class="divider"></v-divider>
          <p class="overview">{{ movie.overview }}</p>
          <v-divider class="divider"></v-divider>
          <p class="rating">Rating: {{ movie.vote_average }} IMDb</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}`, {
        params: {
          api_key: "ee0ac88ee409b7e463539db07f6cd832",
        },
      })
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.movie-details-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

.movie-poster {
  width: 100%;
  max-height: 500px;
  margin-top: 2rem;
}

.movie-details {
  padding: 20px;
}

.title {
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  color: #212121;
}

.overview {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #424242;
}

.rating {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #757575;
}

.divider {
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: #bdbdbd;
}
</style>
