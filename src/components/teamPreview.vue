<template>
  <div v-on:click="fullteampage">
    <span>team name: {{team_name}}</span>
    <span>
        <img v-bind:src="team_logo">
    </span>
  </div>
</template>

<script>
export default {
    name: "team-preview",
    props: {
        team_id: {
            type: Number,
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

</style>