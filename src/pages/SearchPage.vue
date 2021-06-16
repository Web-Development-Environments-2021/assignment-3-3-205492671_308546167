<template>
  <div class="main">
    <h1 class="title">Search Page</h1>

    <b-input-group prepend="Search Query:" class="search-input">
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

  <div class = "sort_container">
    <div class="filter_bar">
      <filter-bar v-if="selectedMainSearch == 'player'"  v-on:filter-results="FilterResults"></filter-bar>
    </div>
    <div class="sort_bar">
      <sort-bar v-if="selectedMainSearch == 'player'" :options="mainPlayerSortOptions" v-on:sort-results="SortResults"></sort-bar>
      <sort-bar v-if="selectedMainSearch == 'team'" :options="mainTeamSortOptions" v-on:sort-results="SortResults"></sort-bar>
    </div>

  </div>
  <div class="search_results">
    <search-results v-if="selectedMainSearch == 'team' && filterTeamBySearch" :results="results" :selectedMainSearch="selectedMainSearch" :emptyQuery="searchQuery" ></search-results>
    <search-results v-if="selectedMainSearch == 'player' && filterPlayerBySearch" :results="results" :selectedMainSearch="selectedMainSearch" :emptyQuery="searchQuery" ></search-results>
  </div>
    <br/>
  </div>
</template>

<script>
import FilterBar from '../components/searchComponents/filterBar.vue';
import searchResults from '../components/searchComponents/searchResults.vue';
import SortBar from '../components/searchComponents/sortBar.vue';
export default {
  components: { searchResults, SortBar, FilterBar, FilterBar },
  data() {
      return {
        results: [],
        searchQuery:"",
        selectedMainSearch: 'player',
        mainFilterOptions: [
          { text: 'player', value: 'player' },
          { text: 'team', value: 'team' },
        ],
        mainPlayerSortOptions: [
          { text: 'ABC', value: 'fullname' },
          { text: 'TEAM NAME', value: 'team_name' },
        ],
        mainTeamSortOptions: [
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
    },
    FilterResults(filterby, value){
      this.results = this.results.filter(e => e[filterby] == value)
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

.search-input {
  margin-left: 250px; 
  margin-bottom: 20px;
  width: 500px;
}

/* .main{
  border: solid 2px red;
}*/

.filter_bar{
  /* border: solid 2px blue; */
  width: max-content; 
  margin-left: 50px;
}

.search_results{
  /* border: solid 2px green; */
  margin-left: 250px ;
}

.sort_bar{
  /* border: solid 2px purple; */
  width: max-content;
  margin-left: 50px;
} 


.sort_container{
  /* border: solid 2px red; */
  display: flex;
  /* justify-content: space-evenly;  */
  width: max-content;
}
</style>
