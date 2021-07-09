<template>
    <div>
      <h2> League Management Page </h2>
      <b-row>
        <b-col md="10">
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

      <template #cell(score)="data">
        <score-update :match_id="data.item.match_id" :oldScore="data.item.score" v-on:add-score="addScore"></score-update>
      </template>

      <template #row-details="row">
        <div class="eventlog">
          <add-event :match="row.item" v-on:add-event="addEvent"></add-event>
          <event v-for="e in row.item.eventlog" :event="e" :key="e.min_in_game"></event>
        </div>
      </template>
    </b-table>
    <div class="c-match-button">
    <create-match v-on:add-match="addMatch"></create-match>
    </div>
    <div class="r-add-button">
    <add-referee v-on:add-referee="addReferee" :button_name="'Add Referee'"></add-referee>
    </div>
    <div class="r-add-button">
    <add-referee v-on:add-referee="assignReferee" :button_name="'Assign referee to league'"></add-referee>
    </div>


  </div>
</template>

<script>
import CreateMatch from '../components/LeagueMangementButtons/createMatch.vue'
import event from '../components/event.vue'
import AddReferee from '../components/LeagueMangementButtons/addReferee.vue'
import AddEvent from '../components/LeagueMangementButtons/addEvent.vue'
import ScoreUpdate from '../components/LeagueMangementButtons/scoreUpdate.vue'
export default {
  components: { event, CreateMatch, AddReferee, AddEvent, ScoreUpdate },
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
            editable: true,
            required: false
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
          "http://localhost:4000/user/union_representative/match",{
          home_team_name: match.home_team_name,
          away_team_name: match.away_team_name,
          date: match.date,
          referee_name: match.referee_name},
          {withCredentials: true}
        );
        this.$root.toast("create match", "match was created successfully", "success");
        this.getSeasonMatches();
      } catch (error) {
        this.$root.toast("create match", error.response.data, "danger");
      }
    },

    async addEvent(event){
      try {
        const response = await this.axios.put(
          "http://localhost:4000/user/union_representative/add_event", event,
          {withCredentials: true}
        );
        this.$root.toast("add event", "event was added successfully", "success");
        this.$root.store.actions.addEvent(event);
      } catch (error) {
        this.$root.toast("add event", error.response.data, "danger");
      }
    },

    async addScore(update_score){
      try {
        debugger;
        const response = await this.axios.put(
          "http://localhost:4000/user/union_representative/add_score", update_score,
          {withCredentials: true}
        );
        this.$root.toast("add score", "score was added successfully", "success");
        this.$root.store.actions.addScore(update_score);
      } catch (error) {
        this.$root.toast("add score", error.response.data, "danger");
      }
    },


    async addReferee(referee_name){
      try {
        const response = await this.axios.put(
          "http://localhost:4000/user/union_representative/assign_referee",{referee_name},
          {withCredentials: true}
        );
        this.$root.toast("add referee", "referee was added successfully", "success");
        this.getSeasonMatches();
      } catch (error) {
        this.$root.toast("add referee", error.response.data, "danger");
      }
    },

    async assignReferee(referee_name){
      try {
        const response = await this.axios.put(
          "http://localhost:4000/user/union_representative//assign_referee_league",{referee_name},
          {withCredentials: true}
        );
        this.$root.toast("add referee", "referee was added successfully", "success");
        this.getSeasonMatches();
      } catch (error) {
        this.$root.toast("add referee", error.response.data, "danger");
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

.c-match-button {
  float: right;
}

.r-add-button {
  float: right;
  margin-right: 10px;
}

</style>