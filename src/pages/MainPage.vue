<template>
  <div class="container">
    <br>
    <b-container>
      <b-row>
        <b-col cols="6">
          <LeagueInfo
            :leagueName="league_summary.league_name"
            :season="league_summary.season_name"
            :stage="league_summary.stage_name"
            :match="league_summary.match"
          ></LeagueInfo>
        </b-col>
        <b-col cols="6">
          <LoginPage v-if="!$root.store.state.user.username"></LoginPage>
          <FavoriteGames :num_matches="3" v-else ></FavoriteGames>
        </b-col>
      </b-row>
    </b-container>

    
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames
  },
  data(){
    return{
      league_summary: {}
    }
  },
  methods:{
    async getLeagueInfo(){
      console.log("getting league info")
      try {
        const response = await this.axios.get(
          "http://localhost:4000/league/summary"
        );
        this.$root.store.actions.setLeagueInfo(response.data);
        this.league_summary = response.data
      } catch (error) {
        console.log("error in league summary");
      }  
    }
  },
  created(){
    if (!this.$root.store.state.league_info.fresh){ 
      this.getLeagueInfo();
    }
    else{
      this.league_summary = this.$root.store.state.league_info.league_summary
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
