const state = {
    user: {
        username: "guest",
        roles: []
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
                "team_id": "2905",
                "team_name": "RGF",
                "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/25/2905.png"
              },
            {
              "team_id": "2906",
              "team_name": "AGF",
              "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/25/2905.png"
            },
            {
                "team_id": "2907",
                "team_name": "BGF",
                "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/25/2905.png"
              }
          ]
    }
}
const actions = {
    login(username, roles) {
        state.user.username = username;
        state.user.roles = roles;
        },
    logout() {
    state.user.username = undefined;
    },
    setFavoriteMatches(favorite_matches) {
        let freshness = state.favorite_matches.fresh;
        state.favorite_matches.matches = favorite_matches;
        state.favorite_matches.fresh = !freshness;
    },
    setSeasonMatches(season_matches) {
        state.season_matches.matches = season_matches;
        state.favorite_matches.fresh = true;
    },
    setPlayers(players){
        state.search.all_players = players;
    },
    setTeams(teams){
        state.search.all_teams = teams;
    }
}
export { state, actions };  
  