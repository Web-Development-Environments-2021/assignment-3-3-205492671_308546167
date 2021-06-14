<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'MainPage' }">Superliga Vue</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        <b-nav-item :to="{ name: 'Search Page' }">Search</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.state.user.username">
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item-dropdown right>
          <template #button-content>
            User
          </template>
          <b-dropdown-item href="#">Favorites</b-dropdown-item>
          <b-dropdown-item href="#">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    async getAllPlayres(){
      console.log("getting players")
      try {
        const response = await this.axios.get(
          "http://localhost:4000/search/player"
        );
        this.$root.store.actions.setPlayers(response.data.search_player);
      } catch (error) {
        console.log("error in search players")
        console.log(error);
      }
    },
    async getAllTeams(){
      console.log("getting players")
      try {
        const response = await this.axios.get(
          "http://localhost:4000/search/team"
        );
        this.$root.store.actions.setTeams(response.data.search_team);
      } catch (error) {
        console.log("error in search players")
        console.log(error);
      }
    }
  },
  created(){
    // this.getAllPlayres();
    // this.getAllTeams();
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url(".\\assets\\field.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}


#nav {
  padding: 30px;


}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00e980;
}
</style>
