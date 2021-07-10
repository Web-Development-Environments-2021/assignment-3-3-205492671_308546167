<template>
  <div id="app">
    <b-navbar style="background-color:#2c3e50" toggleable="lg" type="dark" >
      <b-navbar-brand :to="{ name: 'MainPage' }">Superliga Vue</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        <b-nav-item :to="{ name: 'Search Page' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'Current Fixture Page' }">Current Fixture</b-nav-item>
        <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="!$root.store.state.user.username">
          <b-nav-item :to="{ name: 'Login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'Register' }">Register</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-nav-item :to="{ name: 'League Management Page' }" v-if="isUni">League Management</b-nav-item>
          <b-nav-item :to="{ name: 'favorites' }">Favorites</b-nav-item>
          <b-nav-item href="#" v-on:click=Logout >Log Out</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if="$root.store.state.user.username" class="ml-auto d-flex align-items-center">
          <b-avatar class="mr-3" variant="info" v-bind:src="$root.store.state.user.profile_picture">
                <template v-if="isUni" #badge><b-icon icon="star-fill"></b-icon></template>
          </b-avatar>
           <span class="user-name mr-auto">{{$root.store.state.user.username}}</span>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto d-flex align-items-center">
          <b-avatar class="mr-3" variant="info" src="src\assets\guest-icon-png-6.jpg">
                <template v-if="isUni" #badge><b-icon icon="star-fill"></b-icon></template>
          </b-avatar>
           <span class="user-name mr-auto">hello guest</span>
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
    async Logout() {
      debugger;
      try {
        const response = await this.axios.put(
          "http://localhost:4000/user/logout", {}, {withCredentials: true}
      );
      this.$root.store.actions.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$root.store.actions.logout();
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
      }
      catch (error) {
        console.log("error in logout")
        console.log(error);
      }
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
  computed: {
    isUni(){
      return this.$root.store.state.user.roles.includes("union_rep")
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url(".\\assets\\grass.jpg");
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

.user-name {
  color: white;
  font-weight: bold;
  // padding: 10px;
  
}

#nav a.router-link-exact-active {
  color: #00e980;
}


</style>
