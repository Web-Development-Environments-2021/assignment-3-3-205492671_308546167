const state = {
    user: {
        username: "guest",
        roles: []
    },
    favorite_matches: {
        matches: [],
        fresh: false // indicates whater need to bring favorite matches from server
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
  