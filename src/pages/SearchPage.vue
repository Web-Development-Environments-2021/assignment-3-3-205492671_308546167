<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <div></div>
      
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    </b-input-group>
    <div v-if="selected == 'player'">
      <div v-for="p in filterPlayerBySearch" :key="p.player_id">
          <span>
            {{p.fullname}}
          </span>
      </div>
    </div>
    <div v-if="selected == 'team'">
      <div v-for="t in filterTeamBySearch" :key="t.team_id">
          <span>
            {{t.team_name}}
          </span>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
 data() {
    return {
      searchQuery:"",
      selected: 'player',
      options: [
        { text: 'player', value: 'player' },
        { text: 'team', value: 'team' },
      ]
    };
  },
  computed: {
    filterPlayerBySearch(){
      debugger;
      if (this.searchQuery  == "")
        return [];
      let query = this.searchQuery;
      let qulified_players = this.$root.store.state.search.all_players.filter(pl => {
        return pl.fullname.toLowerCase().includes(query); 
      });
      return qulified_players;
    },
    filterTeamBySearch(){
      debugger;
      if (this.searchQuery  == "")
        return [];
      let query = this.searchQuery;
      let qulified_teams = this.$root.store.state.search.all_teams.filter(t => {
        return t.team_name.toLowerCase().includes(query); 
      });
      return qulified_teams;
    }
  }
  
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>
