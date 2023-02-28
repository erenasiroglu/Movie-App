import { Vue, Component } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {},
})
export default class MovieApp extends Vue {
  searchTerm = "";
  apiKey = "ee0ac88ee409b7e463539db07f6cd832";
  movies = [];
  //Show Movies Section
  theatersMovies = [];
  trendMovies = [];
  topRatedMovies = [];
  selectedMovie = [];

  async searchMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchTerm}&language=en-US`
    );

    this.movies = response.data.results;
  }

  async getMoviesInTheaters() {
    const nowPlayingResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`
    );
    this.theatersMovies = nowPlayingResponse.data.results;
    this.movies = nowPlayingResponse.data.results;
  }

  async getTopRatedMovies() {
    const topRatedResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`
    );
    this.topRatedMovies = topRatedResponse.data.results;
    this.movies = topRatedResponse.data.results;
  }

  async getTrendMovies() {
    const trendResponse = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}&language=en-US&page=1`
    );
    this.trendMovies = trendResponse.data.results;
    this.movies = trendResponse.data.results;
  }

  async created() {
    await this.getTrendMovies();
  }
}
