<template>
    <div>
       <b-table striped hover :items="pre_matches"></b-table>
       <b-table striped hover :items="post_matches"></b-table>
    </div>
</template>

<script>
export default {
  data(){
    return{
      pre_matches: [],
      post_matches: []
    }
  },
  methods: {
    async get_current_fixture(){
      try{
      const response = await this.axios.get("http://localhost:4000/league/current_fixture");   
      this.pre_matches = response.data.pre_played_matches;   
      this.post_matches = response.data.post_played_matches;
      }
      catch{
        console.log("something went wrong");
        this.$route.push("*");
      }
    }
  },
  mounted() {
    this.get_current_fixture();
  }

  
}
</script>

<style>

</style>