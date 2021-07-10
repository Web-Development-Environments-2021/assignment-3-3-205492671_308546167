<template>
  <div>
    <div v-if="busy" class="text-center my-2">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
    <div v-else>
    <GamePreview
      v-for="g in games"
      :id="g.match_id" 
      :home_team="g.home_team" 
      :away_team="g.away_team" 
      :home_team_logo="g.home_team_logo" 
      :away_team_logo="g.away_team_logo" 
      :date="g.date" 
      :court="g.court"
      :score="g.score"
      :key="g.id"></GamePreview>

    <p v-if="!games.length"> no favorite matches are selected</p>
    </div>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  },
  props: {
    num_matches: {type: Number, required: false}
  }, 
  data() {
    return {
      games: this.$root.store.state.favorite_matches.matches,
      busy: true
    };
  },
  methods: {
    async updateGames(){
      try {
        const response = await this.axios.get(
          "http://localhost:4000/user/favorites/matches", {withCredentials: true}
        );
        this.games = response.data;
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  async created(){
    console.log("fav is up")
    if (!this.$root.store.state.favorite_matches.fresh){
      await this.updateGames();
      this.$root.store.actions.setFavoriteMatches(this.games) 
    }
    if (this.num_matches){
      this.games = this.games.slice(0, this.num_matches)
    }
    this.busy = false
  }
};
</script>

<style></style>
