<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="btn-radios-1"
          v-model="selectedMainSearch"
          :options="mainFilterOptions"
          :aria-describedby="ariaDescribedby"
          name="radios-btn-Mainsearch"
          buttons
        ></b-form-radio-group>
      </b-form-group>
    </b-input-group>
    <sort-bar :options="mainSortOptions" v-on:sort-results="SortResults"></sort-bar>

    <search-results v-if="selectedMainSearch == 'team' && filterTeamBySearch" :results="results" :selectedMainSearch="selectedMainSearch" ></search-results>
    <search-results v-if="selectedMainSearch == 'player' && filterPlayerBySearch" :results="results" :selectedMainSearch="selectedMainSearch" ></search-results>
    <br/>
  </div>
</template>

<script>
import searchResults from '../components/searchComponents/searchResults.vue';
import SortBar from '../components/searchComponents/sortBar.vue';
export default {
  components: { searchResults, SortBar },
  data() {
      return {
        results: [],
        searchQuery:"",
        selectedMainSearch: 'player',
        mainFilterOptions: [
          { text: 'player', value: 'player' },
          { text: 'team', value: 'team' },
        ],
        mainSortOptions: [
          { text: 'ABC', value: 'abc' },
          { text: 'TEAM NAME', value: 'team_name' },
        ]
      };
    },
    methods: {
      saveResults(search_results){
        this.results = search_results;
      },

      SortResults(sortby){
        this.results.sort(function(a,b){
            debugger;
            let nameA = a[sortby];
            let nameB = b[sortby];
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          // names must be equal
          return 0;
      })
    }
    },
    computed: {
      filterPlayerBySearch(){
        if (this.searchQuery  == ""){
          return [];
        }
        let query = this.searchQuery;
        let qulified_players = this.$root.store.state.search.all_players.filter(pl => {
          return pl.fullname.toLowerCase().includes(query); 
        });
        this.saveResults(qulified_players);
        return qulified_players;
      },
      filterTeamBySearch(){
        if (this.searchQuery  == ""){
          return [];
        }
        let query = this.searchQuery;
        let qulified_teams = this.$root.store.state.search.all_teams.filter(t => {
          return t.team_name.toLowerCase().includes(query); 
        });
        this.saveResults(qulified_teams);
        return qulified_teams;
      }
    }
    
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  margin-bottom: 20px;
  width: 500px; 
}
</style>
