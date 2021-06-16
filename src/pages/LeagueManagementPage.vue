<template>
    <div>
      <h2> League Management Page </h2>
      <b-row>
        <b-col md="10">
          <!-- <b-form-input v-model="filter" type="search" placeholder="search"></b-form-input> -->
        </b-col>
      </b-row>

    <b-table striped hover :items="season_matches" :fields="fields" :busy="isBusy" responsive="sm" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
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
    </b-table>
    <div class="c-match-button">
    <create-match :add-match="addMatch"></create-match>
    </div>


  </div>
</template>

<script>
import CreateMatch from '../components/createMatch.vue'
import event from '../components/event.vue'
export default {
  components: { event, CreateMatch },
  name: "leagueMangment",
  data(){
    return{
      filter: '',
      league_id: 271,
      season_matches: [],
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
            editable: true
          }
        ],
    }
  },
  methods: {
    async getSeasonMatches(){
      if (this.$root.store.state.season_matches.fresh){
        return
      }
      console.log("getting Season Matches")
      try {
        const response = await this.axios.get(
          "http://localhost:4000/user/union_representative/matches/271",
          {withCredentials: true}
        );
        this.season_matches = response.data.season_matches;
        this.$root.store.actions.setSeasonMatches(response.data.season_matches);
      } catch (error) {
        console.log("error in season matches players")
        console.log(error);
      }
    },
    async addMatch(match){
      try {
        const response = await this.axios.post(
          "http://localhost:4000/user/union_representative/match",
          {match},
          {withCredentials: true}
        );
        this.season_matches.push({match});
        this.$root.store.actions.setSeasonMatches(this.season_matches);
      } catch (error) {
        console.log("error in enter match")
        console.log(error);
      }
    }
  },
  computed: {
    isBusy() {
        if (!this.season_matches.length){
          console.log("im busy")
          return true;
        }
        console.log("im cool")
        return false;
      }
  },
  created(){
    this.getSeasonMatches();
  }

}
</script>

<style scoped>
.eventlog {
  /* display: flex;
  border: 2px red; */
}
.c-match-button{
  float: right;
}

</style>