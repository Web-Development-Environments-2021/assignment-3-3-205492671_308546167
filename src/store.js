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
        fresh: false // indicates whater need to bring favorite matches from server
    },
    season_matches: {
        matches: [],
        fresh: false
    },
    search: {
        all_players: [],
        all_teams: [
          {
            "team_id": 85,
            "team_name": "København",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/21/85.png"
          },
          {
            "team_id": 86,
            "team_name": "Silkeborg",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/22/86.png"
          },
          {
            "team_id": 293,
            "team_name": "Brøndby",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/5/293.png"
          },
          {
            "team_id": 390,
            "team_name": "SønderjyskE",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/6/390.png"
          },
          {
            "team_id": 939,
            "team_name": "Midtjylland",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
          },
          {
            "team_id": 1020,
            "team_name": "AaB",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/28/1020.png"
          },
          {
            "team_id": 1789,
            "team_name": "OB",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/29/1789.png"
          },
          {
            "team_id": 2356,
            "team_name": "Randers",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/20/2356.png"
          },
          {
            "team_id": 2394,
            "team_name": "Nordsjælland",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/26/2394.png"
          },
          {
            "team_id": 2447,
            "team_name": "Viborg",
            "image": "https://cdn.sportmonks.com/images/soccer/team_placeholder.png"
          },
          {
            "team_id": 2905,
            "team_name": "AGF",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/25/2905.png"
          },
          {
            "team_id": 7466,
            "team_name": "Vejle",
            "image": "https://cdn.sportmonks.com/images//soccer/teams/10/7466.png"
          }
        ]
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
    addSCore(s){
      let match = state.season_matches.matches.find(m => m.match_id == s.match_id);
      match.score = s.score;
    },
    hasPremission(role){
      return state.user.roles.includes(role);
    },
    setLeagueInfo(summary){
      state.league_info.league_summary = summary
      state.league_info.fresh = !state.league_info.fresh
    }

}
export { state, actions };  
  