<template>
    <div>
      <h1> Up coming</h1>
      <b-table striped hover :items="pre_matches" :fields="fields">
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

       <b-table striped hover :items="post_matches">

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
    }
  },
  created() {
    this.get_current_fixture();
  }

  
}
</script>

<style>

</style>