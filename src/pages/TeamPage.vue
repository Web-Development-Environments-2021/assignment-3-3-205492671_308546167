<template>
  
  <div >

  <div class="labels">{{team_name}}</div>
  <b-container>
    <b-row align-content="center">
      <b-col cols="4" >
        <h3>Pre Played Matches</h3>
      </b-col>
      <b-col cols="4">
      </b-col>
          <b-col cols="4"> 
        <h3>Post Played Matches</h3>
      </b-col>
    </b-row>
    <b-row >
          <b-col cols="4" >
            <div id= "matches">
              <GamePreview
                v-for="m in pre_played_matches"
                :id="m.match_id" 
                :home_team="m.home_team" 
                :away_team="m.away_team" 
                :date="m.date" 
                :court="m.court"
                :key="m.id"></GamePreview>
            </div>
          </b-col>
          <b-col cols="4" class="team-prev">
            <teamPreview
              :team_id="team_id"
              :team_name="team_name"
              :team_logo="team_logo">
            </teamPreview>
          </b-col>
            <b-col cols="4" > 
          <GamePreview
            v-for="m in post_played_matches"
            :id="m.match_id" 
            :home_team="m.home_team" 
            :away_team="m.away_team" 
            :date="m.date" 
            :court="m.court"
            :key="m.id"></GamePreview>
        </b-col>
    </b-row>

      <b-row>
        <b-carousel 
          class = "players-carousel"
          id="carousel-2"
          :interval="4000"
          controls
          indicators
          background="transparent"
          style="text-shadow: 1px 1px 2px #333; width:40%;"
        >

          <b-carousel-slide 
            img-blank img-alt="Blank image"
            v-for="p in players" :key="p.player_id"
          >
            <PlayerPreviewNG
                :player_id="p.player_id"
                :fullname="p.fullname" 
                :team_name="p.team_name" 
                :position_num="p.position_num" 
                :picture="p.picture" 
                :key="p.fullname">
              </PlayerPreviewNG>
          </b-carousel-slide>
        </b-carousel>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import GamePreview from '../components/GamePreview.vue';
import PlayerPreviewNG from '../components/PlayerPreviewNG.vue';
import teamPreview from '../components/teamPreview.vue';
export default {
  name: "team-Page",
  components: { PlayerPreviewNG, GamePreview, teamPreview },
  data() {
    return {
      players: [],
      post_played_matches: [],
      pre_played_matches: [],
      team_name:"",
      team_logo:"",
      team_id: "" 
    };
  },
  methods: {
    async getTeamDetails(){
      try {
        let temp_team_id = this.$route.params.id;
        this.team_id = temp_team_id.toString();
        const response = await this.axios.get(
          'http://localhost:4000/team/page/' + this.team_id ,
          {withCredentials: true}
        );
        this.players = response.data.team_players;
        this.post_played_matches = response.data.post_played_matches;
        this.pre_played_matches = response.data.pre_played_matches;
        this.team_name = response.data.team_name;
        this.team_logo = response.data.team_logo;
 
      } catch (error) {
        console.log(error);
        this.$router.push("/").catch(()=>{});
      }
    },
    async getDetailsTODELETE(){
        this.players =this.$root.store.state.teams.team_players;
        this.post_played_matches =this.$root.store.state.teams.post_played_matches;
        this.pre_played_matches=this.$root.store.state.teams.pre_played_matches;
        this.team_name = this.$root.store.state.teams.team_name;
        this.team_logo = this.$root.store.state.teams.team_logo;
        this.team_id = this.$root.store.state.teams.team_id;


    }
  },
  created(){
    this.getTeamDetails();
    // this.getDetailsTODELETE();
  }

}
</script>

<style>
.labels{
  color:whitesmoke;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
}
#team-players {
  display: inline-flex;

}

.team-prev{
 left:6%;
}

.players-carousel{
  left:30%;
}


  

</style>