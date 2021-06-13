const state = {
    user: {
        username: "guest",
        roles: []
    },
    favorite_matches: {
        matches: [],
        fresh: false // indicates whater need to bring favorite matches from server
    },
    search: {
        all_players: [],
        all_teams: [
            {
              "team_id": "2905",
              "team_name": "AGF",
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
    setPlayers(players){
        state.search.all_players = players;
    },
    setTeams(teams){
        state.search.all_teams = teams;
    }
}
export { state, actions };  
  