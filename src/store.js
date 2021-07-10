const state = {
    league_info: {
      league_summary: {},
      fresh: false
    },  
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
        all_players: [{"player_id":26722,"fullname":"Stephan Maigaard Andersen","picture":"https://cdn.sportmonks.com/images/soccer/players/2/26722.png","position_num":1,"team_name":"København"},{"player_id":84587,"fullname":"Sten Michael Grytebust","picture":"https://cdn.sportmonks.com/images/soccer/players/11/84587.png","position_num":1,"team_name":"København"},{"player_id":25057,"fullname":"Karl-Johan Johnsson","picture":"https://cdn.sportmonks.com/images/soccer/players/1/25057.png","position_num":1,"team_name":"København"},{"player_id":84494,"fullname":"Victor Nelsson","picture":"https://cdn.sportmonks.com/images/soccer/players/14/84494.png","position_num":2,"team_name":"København"}],
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
          "player_id": 82808,
          "fullname": "Jesper Hansen",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/24/82808.png",
          "position_num": 1,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 537110,
          "fullname": "Oliver Ottesen",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/22/537110.png",
          "position_num": 1,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 5627,
          "fullname": "Mikkel Andersen",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/27/5627.png",
          "position_num": 1,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 32408,
          "fullname": "Jonas Lössl",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/24/32408.png",
          "position_num": 1,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 62943,
          "fullname": "Dion Cools",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/31/62943.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 83716,
          "fullname": "Daniel Høegh",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/4/83716.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 191065,
          "fullname": "Joel Andersson",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/25/191065.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 61736,
          "fullname": "Alexander Scholz",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/8/61736.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 56300,
          "fullname": "Ailton Ferreira Silva",
          "picture": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84980,
          "fullname": "Kristian Dirks Riis",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/20/84980.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 5283381,
          "fullname": "Oliver Olsen",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/21/5283381.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 83459,
          "fullname": "Erik Sviatchenko",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/3/83459.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 440450,
          "fullname": "Paulo Victor da Silva",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/2/440450.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 23698072,
          "fullname": "Japhet Sery",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/24/23698072.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84535,
          "fullname": "Rasmus Nicolaisen",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/23/84535.png",
          "position_num": 2,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84011,
          "fullname": "Pione Sisto Ifolo Emirmija",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/11/84011.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 223604,
          "fullname": "Evander da Silva Ferreira",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/20/223604.png",
          "position_num": 3,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84619,
          "fullname": "Awer Mabil",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/11/84619.png",
          "position_num": 3,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84570,
          "fullname": "Mikael Anderson",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/26/84570.png",
          "position_num": 3,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 84620,
          "fullname": "Anders Dreyer",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/12/84620.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 537108,
          "fullname": "Ogochukwu Onyeka Frank",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/20/537108.png",
          "position_num": 3,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 194768,
          "fullname": "Jens-Lys Michel Cajuste",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/16/194768.png",
          "position_num": 3,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 190438,
          "fullname": "Sory Kaba",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/6/190438.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 6216,
          "fullname": "Lasse Vibe",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/8/6216.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 47518,
          "fullname": "Luca Pfeiffer",
          "picture": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 1548396,
          "fullname": "José Francisco dos Santos Júnior",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/12/1548396.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        },
        {
          "player_id": 142478,
          "fullname": "Chuma Anene",
          "picture": "https://cdn.sportmonks.com/images/soccer/players/14/142478.png",
          "position_num": 4,
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
        }
      ],

    
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
          ],
          "team_name": "Midtjylland",
          "team_logo": "https://cdn.sportmonks.com/images//soccer/teams/11/939.png"
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
    setFavoriteMatchFreshness(){
      state.favorite_matches.fresh = !state.favorite_matches.fresh;
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
  