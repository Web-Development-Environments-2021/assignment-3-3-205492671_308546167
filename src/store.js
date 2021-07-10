const state = {
    league_info: {
      league_summary: {},
      fresh: false
    },  
    user: {
        username: "",
        roles: [],
        profile_picture: ""
    },
    favorite_matches: {
        matches: [],
        fresh: false // indicates whetere need to bring favorite matches from server
    },
    season_matches: {
        matches: [],
        fresh: false
    },
    search: {
        last_search: [],      
        all_players: [],
        all_teams: []
    }, 
}
const actions = {
    login(username, roles, profile_picture) {
        state.user.username = username;
        state.user.roles = roles;
        state.user.profile_picture = profile_picture;
        },
    logout() {
    state.user.username = undefined;
    state.user.roles = [];
    },
    setFavoriteMatches(favorite_matches) {
        let freshness = state.favorite_matches.fresh;
        state.favorite_matches.matches = favorite_matches;
        state.favorite_matches.fresh = !freshness;
    },
    setFavoriteMatchFreshness(){
      state.favorite_matches.fresh = !state.favorite_matches.fresh;
    },
    setSeasonMatches(season_matches) {
        state.season_matches.matches = season_matches;
        state.season_matches.fresh = true;
    },
    setPlayers(players){
        state.search.all_players = players;
    },
    setTeams(teams){
        state.search.all_teams = teams;
    },
    addEvent(e){
      let match = state.season_matches.matches.find(m => m.match_id == e.match_id);
      match.eventlog.push(e.event);
    },
    addScore(s){
      let match = state.season_matches.matches.find(m => m.match_id == s.match_id);
      debugger;
      match.score = s.score;
    },
    hasPremission(role){
      return state.user.roles.includes(role);
    },
    setLeagueInfo(summary){
      state.league_info.league_summary = summary
      state.league_info.fresh = !state.league_info.fresh
    },
    saveSearch(last_search){
      state.search.last_search = last_search
    }

}
export { state, actions };  
  