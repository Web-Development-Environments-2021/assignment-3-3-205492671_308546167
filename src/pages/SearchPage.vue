<template>
  <div class="main">
    <br>
    <b-card class="search-card">
      <b-form>
        <b-form-group >
          <label class="welcome-wish">Hey {{username}} , What are you looking for?</label>
          <b-form-radio-group v-model="selectedMainSearch" :options="mainFilterOptions" class="pt-2" id="radio-group-2"></b-form-radio-group>
          <span>
            <b-row>
              <b-col cols="9">
                <vue-bootstrap-typeahead v-if="selectedMainSearch == 'player'" v-model="searchQuery" :data="$root.store.state.search.all_players" :serializer="s => s.fullname"/>
                <vue-bootstrap-typeahead v-if="selectedMainSearch == 'team'" v-model="searchQuery" :data="$root.store.state.search.all_teams" :serializer="s => s.team_name"/>
              </b-col>
              <b-col cols="3"><b-button v-on:click="search">Search <b-icon-search></b-icon-search></b-button> </b-col>
            </b-row>
          </span>
          <br>
          <div>
            <div class="mb-3">
              
                <div class="buttons" >
                  <sort-bar v-if="selectedMainSearch == 'player'" :options="mainPlayerSortOptions" v-on:sort-results="SortResults"> </sort-bar>
                  <sort-bar v-if="selectedMainSearch == 'team'" :options="mainTeamSortOptions" v-on:sort-results="SortResults"> </sort-bar>
                  <b-button v-if="selectedMainSearch == 'player'" v-b-toggle.my-sidebar class="filter-button"><div class="filter-padding"> Filter By</div><b-icon-filter> </b-icon-filter></b-button>
                </div>
        

              
            </div>
            <b-sidebar id="my-sidebar" title="Filter Bar" shadow>
              <div class="px-3 py-2">
                <div class="filter_bar">
                  <filter-bar v-if="selectedMainSearch == 'player'"  v-on:filter-results="FilterResults"></filter-bar>
                </div>
              </div>
            </b-sidebar>
        </div>
      </b-form-group>
      </b-form>
    </b-card>
    <br>


  <div class="search_results">
    <search-results :results="results" :selectedMainSearch="selectedMainSearch" :emptyQuery="searchQuery" ></search-results>
  </div>

    <br/>
  </div>
</template>

<script>
import FilterBar from '../components/searchComponents/filterBar.vue';
import searchResults from '../components/searchComponents/searchResults.vue';
import SortBar from '../components/searchComponents/sortBar.vue';
export default {
  components: { searchResults, SortBar, FilterBar },
  data() {
      return {
        results: [],
        searchQuery:"",
        selectedMainSearch: 'player',
        mainFilterOptions: [
          { text: 'Player', value: 'player' },
          { text: 'Team', value: 'team' },
        ],
        mainPlayerSortOptions: [
          { text: 'ABC', value: 'fullname' },
          { text: 'Team Name', value: 'team_name' },
        ],
        mainTeamSortOptions: [
          { text: 'Team Name', value: 'team_name' },
        ]
      };
    },
    methods: {
      saveResults(search_results){
        this.$root.store.actions.saveSearch(search_results);
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
      },
      search(){
        if (this.selectedMainSearch == "player"){
          this.filterPlayerBySearch();
        }
        else{
          this.filterTeamBySearch();
        }
      },
          filterPlayerBySearch(){
        if (this.searchQuery  == ""){
          return [];
        }
        let query = this.searchQuery;
        let qulified_players = this.$root.store.state.search.all_players.filter(pl => {
          return pl.fullname.toLowerCase().includes(query.toLowerCase()); 
        });
        this.saveResults(qulified_players.slice(0,20));
      },
      filterTeamBySearch(){
        if (this.searchQuery  == ""){
          return [];
        }
        let query = this.searchQuery;
        let qulified_teams = this.$root.store.state.search.all_teams.filter(t => {
          return t.team_name.toLowerCase().includes(query.toLowerCase()); 
        });
        this.saveResults(qulified_teams);
        return qulified_teams;
      }
  },
  computed: {
    username(){
      if(this.$root.store.state.user.username){
        return this.$root.store.state.user.username;
      }
      return "guest";
    } 
  },
  created() {
    this.results = this.$root.store.state.search.last_search
  },
}
</script>

<style scoped>
.search-card{
  background-color: #E5E5EC;
  opacity: 0.85;
  width: 50%;
  left: 22.5%;
}


.search-input {
  margin-left: 250px; 
  margin-bottom: 20px;
  width: 500px;
}


.filter_bar{
  width: max-content; 
  margin-left: 50px;
}
.filter-button{
 display: flex;
 margin: 10px;
 width: 110px;
 height: 40px;
} 

.filter-padding{
  padding-right: 5px;
}

.buttons{
  display:flex;
}


.sort_bar{
  width: max-content;
  margin-left: 50px;
} 


.sort_container{
  display: flex;
  width: max-content;
}

</style>
