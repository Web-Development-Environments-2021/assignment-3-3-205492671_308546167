<template>
  <div>
      <b-card v-on:click="fullteampage" class="cardcolor "  align="center" style="background-color: transparent;">
                <b-img :src="this.team_logo"></b-img>
                <br>
                <b-badge variant="dark">{{team_name}}</b-badge>
      </b-card>
  </div>
</template>

<script>
export default {
    name: "team-preview",
    props: {
        team_id: {
            type: String,
            required: true
        },
        team_name: {
            type: String,
            required: true
        },
        team_logo: {
            type: String,
            required: false
        }
    },
    methods: {
        fullteampage(){
            this.$router.push({ name: "team-Page", params: {id: this.team_id} }).catch(()=>{});
        }
    }
}
</script>

<style>
.cardcolor{
    max-width: 15rem;
    background-color: transparent;
    border:0;
     max-width: 200px; 
     max-height:200px
}


</style>