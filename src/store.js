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
    },
    player:{
        players: {
            "player_id": "37418793",
            "fullname": "James Gomez",
            "team_name": "Horsens",
            "picture": "https://cdn.sportmonks.com/images/soccer/players/9/37418793.png",
            "position_num": "2",
            "common_name": "J. Gomez",
            "nationality": "Gambia",
            "date_of_birth": "04/04/1994",
            "country": "2507",
            "height": null,
            "Weight": null   
        }

        
    },
    teams:
    {
        "team_id": "939",
        "team_players": [
          {
            "player_id": "5627",
            "fullname": "Mikkel Andersen",
            "team_name": "Midtjylland",
            "picture": "https://cdn.sportmonks.com/images/soccer/players/27/5627.png",
            "position_num": "1"
          },
          {
            "player_id": "82808",
            "fullname": "Jesper Hansen",
            "team_name": "Midtjylland",
            "picture": "https://cdn.sportmonks.com/images/soccer/players/24/82808.png",
            "position_num": "1"
          },
          {
            "player_id": "440450",
            "fullname": "Paulo Victor da Silva",
            "team_name": "Midtjylland",
            "picture": "https://cdn.sportmonks.com/images/soccer/players/2/440450.png",
            "position_num": "2"
          },
          {
            "player_id": "61736",
            "fullname": "Alexander Scholz",
            "team_name": "Midtjylland",
            "picture": "https://cdn.sportmonks.com/images/soccer/players/8/61736.png",
            "position_num": "2"
          }],
          "post_played_matches": [
            {
              "match_id": "1",
              "home_team": "Silkeborg",
              "away_team": "Midtjylland",
              "league": "271",
              "season": "2021/2022",
              "court": "1121",
              "stage": "Regular Season",
              "referee_name": "ref",
              "date": "2021-06-05",
              "eventlog": [
                {
                  "date": "2021-06-14",
                  "min_in_game": "12",
                  "event_type": "yellow card",
                  "description": "Messi foueled Ronaldo and got a yellow card"
                }
              ],
              "score": "3-0"
            }
          ],
          "pre_played_matches": [
            {
              "match_id": "1",
              "home_team": "Silkeborg",
              "away_team": "Midtjylland",
              "league": "271",
              "season": "2021/2022",
              "court": "1121",
              "stage": "Regular Season",
              "referee_name": "ref",
              "date": "2021-06-05",
              "eventlog": [],
              "score": ""
            }
          ]
    }

}
const actions = {
    login(username, roles) {
        debugger;
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
        state.favorite_matches.fresh = !state.season_matches.fresh;
    },
    setPlayers(players){
        state.search.all_players = players;
    },
    setTeams(teams){
        state.search.all_teams = teams;
    }
}
export { state, actions };  
  