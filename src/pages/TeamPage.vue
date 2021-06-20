<template>
    <div>
      <div id= "team-players">
        <h1 class="labels">Team Players</h1>
        <PlayerPreview
          v-for="p in players"
          :player_id="p.player_id"
          :fullname="p.fullname" 
          :team_name="p.team_name" 
          :position_num="p.position_num" 
          :picture="p.picture" 
          :key="p.fullname"></PlayerPreview>
      </div>
      <div id= "matches">
        <h1 class="labels">Pre Played Matches:</h1>
        <GamePreview
          v-for="m in pre_played_matches"
          :id="m.match_id" 
          :home_team="m.home_team" 
          :away_team="m.away_team" 
          :date="m.date" 
          :court="m.court"
          :key="m.id"></GamePreview>
        <br>
        <h1 class="labels">Post Played Matches</h1>
        <GamePreview
          v-for="m in post_played_matches"
          :id="m.match_id" 
          :home_team="m.home_team" 
          :away_team="m.away_team" 
          :date="m.date" 
          :court="m.court"
          :key="m.id"></GamePreview>
      </div>
  </div>
</template>

<script>
import GamePreview from '../components/GamePreview.vue';
import PlayerPreview from '../components/PlayerPreview.vue';
export default {
  name: "team-Page",
  components: { PlayerPreview, GamePreview },
  data() {
    return {
      players: [],
      post_played_matches: [],
      pre_played_matches: []
    };
  },
  methods: {
    async getTeamDetails(){
      try {
        let team_id = this.$route.params.id;
        const response = await this.axios.get(
          'http://localhost:4000/team/page/' + team_id ,
          {withCredentials: true}
        );
        this.players = response.data.team_players;
        this.post_played_matches = response.data.post_played_matches;
        this.pre_played_matches = response.data.pre_played_matches;
 
      } catch (error) {
        console.log(error);
        this.$router.push("/").catch(()=>{});
      }
    },
  },
  created(){
    this.getTeamDetails();
  }

}
</script>

<style>
.labels{
  color:whitesmoke;
  text-align: center;
}
#team-players {
  display: inline-flex;

}
</style>