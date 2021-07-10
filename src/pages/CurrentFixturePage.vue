<template>
    <div>
      <h1 class="title-design"> Up coming</h1>
      <b-table class="data-table" striped hover :items="pre_matches" :fields="fields" :busy="isPreBusy">

      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>


        <template #cell(home_team)="data">
          <button type="button" v-on:click="toTeamPage(data.item.home_team)">{{data.item.home_team}}</button>
        </template>

        <template #cell(away_team)="data">
          <button type="button" v-on:click="toTeamPage(data.item.away_team)">{{data.item.away_team}}</button>
        </template>


        <template #cell(eventlog)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
          </b-button>
        </template>

        <template #row-details="row">
          <div class="eventlog">
            <event v-for="e in row.item.eventlog" :event="e" :key="e.min_in_game"></event>
          </div>
        </template>

        
        <template #cell(favorites)="data">
          <heart name="favorite" :index="data.item.match_id" v-on:add-favorite="addFavorite"
          :value= "$root.store.state.favorite_matches.matches.filter(e => e.match_id == data.item.match_id).length>0"></heart>
        </template>
      </b-table>
      <h1 class="title-design">Already Played</h1>
      <b-table class="data-table" striped hover :items="post_matches" :fields="fields" :busy="isPostBusy">

        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>


        <template #cell(home_team)="data">
          <button type="button" v-on:click="toTeamPage(data.item.home_team)">{{data.item.home_team}}</button>
        </template>

        <template #cell(away_team)="data">
          <button type="button" v-on:click="toTeamPage(data.item.away_team)">{{data.item.away_team}}</button>
        </template>

        <template #cell(eventlog)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
          </b-button>
        </template>

        <template #cell(Favorites)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
          </b-button>
        </template>
        

        <template #row-details="row">
          <div class="eventlog">
            <event v-for="e in row.item.eventlog" :event="e" :key="e.min_in_game"></event>
          </div>
        </template>
       </b-table>
       <br>
    </div>
</template>

<script>
import event from '../components/event.vue'
import Heart from '../components/heart.vue';
export default {
  components: { event, Heart },
  name: "CurrentFixturePage",
  data(){
    return{
      pre_matches: [],
      post_matches: [],
      fields: [
          {
            key: 'match_id',
            sortable: false
          },
          {
            key: 'home_team',
            sortable: true
          },
          {
            key: 'away_team',
            sortable: true
          },
          {
            key: 'league',
            sortable: false
          },
          {
            key: 'season',
            sortable: false
          },
          {
            key: 'court',
            sortable: false
          },
          {
            key: 'stage',
            sortable: false
          },
          {
            key: 'referee_name',
            sortable: false
          },
          {
            key: 'date',
            sortable: true
          },
          {
            key: 'eventlog',
            sortable: false
          },
          {
            key: 'score',
            sortable: false,
            editable: true,
            required: false
          },
          {key: 'favorites'},
        ],
    }
  },
  methods: {
    async get_current_fixture(){
      try{
      const response = await this.axios.get("http://localhost:4000/league/current_fixture");   
      this.pre_matches = response.data.pre_played_matches;   
      this.post_matches = response.data.post_played_matches;
      }
      catch{
        console.log("something went wrong");
        this.$route.push("*");
      }
    },
    async addFavorite(match_id){
      try{
        const response = await this.axios.put("http://localhost:4000/user/favorites/matches",
        {match_id: match_id}, {withCredentials: true});
        this.$root.toast("add favorite", "match was added successfully", "success");
        this.$root.store.actions.setFavoriteMatchFreshness()
      } catch (error) {
        this.$root.toast("add favorite", error.response.data, "danger");
      }   
    },
    toTeamPage(name){
      let team_id = this.$root.store.state.search.all_teams.filter(t=> t.team_name == name)[0].team_id
      this.$router.push({ name: "team-Page", params: {id: team_id} }).catch(()=>{});
    }
  },
  computed: {
    isPreBusy() {
        if (!this.pre_matches.length){
          console.log("im busy")
          return true;
        }
        console.log("im cool")
        return false;
      },
    isPostBusy() {
        if (!this.post_matches.length){
          console.log("im busy")
          return true;
        }
        console.log("im cool")
        return false;
      }
  },
  created() {
    this.get_current_fixture();
  }

  
}
</script>

<style>
.data-table{
    color: #25302B;
  background-color: #E5E5EC;
  opacity: 0.85;
  margin: 0 auto; 
  float: none; 
  width:95%;
}

.title-design{
  color: #2c3e50;
  text-align: center;
  font-weight: bold;

}
</style>