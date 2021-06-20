<template>
  <div>
    <GamePreview
      v-for="g in games"
      :id="g.match_id" 
      :home_team="g.home_team" 
      :away_team="g.away_team" 
      :home_team_logo="g.home_team_logo" 
      :away_team_logo="g.away_team_logo" 
      :date="g.date" 
      :court="g.court"
      :key="g.id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: this.$root.store.state.favorite_matches.matches,
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
  }
};
</script>

<style></style>
