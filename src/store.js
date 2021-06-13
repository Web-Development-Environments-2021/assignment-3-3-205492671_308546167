const state = {
    user: {
        username: "guest",
        roles: []
    },
    favorite_matches: {
        matches: [],
        fresh: false // indicates whater need to bring favorite matches from server
    },
    players_naor:{
        players: [
            {
                "player_id": 37418793,
                "team_id": 211,
                "country_id": 2507,
                "position_id": 2,
                "common_name": "J. Gomez",
                "display_name": "J. Gomez",
                "fullname": "James Gomez",
                "firstname": "James",
                "lastname": "Gomez",
                "nationality": "Gambia",
                "birthdate": null,
                "birthcountry": "Gambia",
                "birthplace": null,
                "height": null,
                "weight": null,
                "image_path": "https://cdn.sportmonks.com/images/soccer/players/9/37418793.png"
            },
            {
                "player_id": 286609,
                "team_id": 271,
                "country_id": 275,
                "position_id": 1,
                "common_name": "W. Fariñez Aray",
                "display_name": "Wuilker Faríñez",
                "fullname": "Wuilker Fariñez Aray",
                "firstname": "Wuilker",
                "lastname": "Fariñez Aray",
                "nationality": "Venezuela",
                "birthdate": "15/02/1998",
                "birthcountry": "Venezuela",
                "birthplace": null,
                "height": "175 cm",
                "weight": "84 kg",
                "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png"
            },
            {
                "player_id": 95481,
                "team_id": 271,
                "country_id": 17,
                "position_id": 1,
                "common_name": "J. Leca",
                "display_name": "Jean-Louis Leca",
                "fullname": "Jean-Louis Leca",
                "firstname": "Jean-Louis",
                "lastname": "Leca",
                "nationality": "France",
                "birthdate": "21/09/1985",
                "birthcountry": "France",
                "birthplace": "Bastia",
                "height": "180 cm",
                "weight": "75 kg",
                "image_path": "https://cdn.sportmonks.com/images/soccer/players/25/95481.png"
            }
        ]
    },
    test_naor:{

                "player_id": 37418793,
                "team_id": 211,
                "country_id": 2507,
                "position_id": 2,
                "common_name": "J. Gomez",
                "display_name": "J. Gomez",
                "fullname": "James Gomez",
                "firstname": "James",
                "lastname": "Gomez",
                "nationality": "Gambia",
                "birthdate": null,
                "birthcountry": "Gambia",
                "birthplace": null,
                "height": null,
                "weight": null,
                "image_path": "https://cdn.sportmonks.com/images/soccer/players/9/37418793.png"
            }
        
}
const actions = {
    login(username, roles) {
        // localStorage.setItem("username", username);
        // localStorage.setItem("roles", roles);
        state.user.username = username;
        state.user.roles = roles;
        // console.log("login", this.username);
        },
    logout() {
    // localStorage.removeItem("username");
    state.user.username = undefined;
    },
    setFavoriteMatches(favorite_matches) {
    // console.log(favorite_matches)
    // localStorage.setItem("favorite_matches", favorite_matches);
    let freshness = state.favorite_matches.fresh;
    // localStorage.setItem("fav_match_fresh", !freshnes);
    state.favorite_matches.matches = favorite_matches;
    state.favorite_matches.fresh = !freshness;
    }
}
export { state, actions };  
  