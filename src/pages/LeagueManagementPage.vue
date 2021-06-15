<template>
    <div>
      <h2> League Management Page </h2>
      <b-row>
        <b-col md="10">
          <b-form-input v-model="filter" type="search" placeholder="search"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table striped hover :items="season_matches" :fields="fields" filter="filter"></b-table>
          </b-col>
      </b-row>

  </div>
</template>

<script>
export default {
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
            key: 'score',
            sortable: false
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
    async addMatche(id){
      try {
        const response = await this.axios.post(
          "http://localhost:4000/user/union_representative/match",
          {match: id},
          {withCredentials: true}
        );
        this.season_matches.push({match: id});
        this.$root.store.actions.setSeasonMatches(this.season_matches);
      } catch (error) {
        console.log("error in enter match")
        console.log(error);
      }
    }
  },
  created(){
    this.getSeasonMatches();
  }

}
</script>

<style>

</style>