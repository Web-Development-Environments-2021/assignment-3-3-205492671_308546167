const state = {
    user: {
        username: "",
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
        all_players: [{"player_id":465302,"fullname":"Arbnor Muçolli","picture":"https://cdn.sportmonks.com/images/soccer/placeholder.png","position_num":3,"team_name":"Vejle"},{"player_id":4192333,"fullname":"German Onugkha","picture":"https://cdn.sportmonks.com/images/soccer/placeholder.png","position_num":4,"team_name":"Vejle"},{"player_id":84022,"fullname":"Lucas Jensen","picture":"https://cdn.sportmonks.com/images/soccer/players/22/84022.png","position_num":3,"team_name":"Vejle"},{"player_id":37288979,"fullname":"Hugo Ekitike","picture":"https://cdn.sportmonks.com/images/soccer/players/19/37288979.png","position_num":4,"team_name":"Vejle"},{"player_id":9606061,"fullname":"Ivan Repyakh","picture":"https://cdn.sportmonks.com/images/soccer/players/13/9606061.png","position_num":3,"team_name":"Vejle"},{"player_id":302358,"fullname":"Alan Goncalves Sousa","picture":"https://cdn.sportmonks.com/images/soccer/placeholder.png","position_num":4,"team_name":"Vejle"},{"player_id":34007907,"fullname":"Foday Manneh","picture":"https://cdn.sportmonks.com/images/soccer/players/3/34007907.png","position_num":4,"team_name":"Vejle"}],
        
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
    state.user.roles = [];
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
  