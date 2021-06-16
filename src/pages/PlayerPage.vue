<template>
    <div>
        <b-card
            no-body
            style="max-width: 20rem;"
        >
            <template #header>
            <h4 class="mb-0">Player Name</h4>
            </template>
            <b-img :src="this.players.picture"></b-img>
            <b-list-group flush>
                <b-list-group-item>Full name: {{this.players.fullname}}</b-list-group-item> 
                <b-list-group-item>Group name:  {{this.players.team_name}}</b-list-group-item>
                <b-list-group-item>Position number:{{this.players.position_num}}</b-list-group-item>
                <b-list-group-item>Common name: {{this.players.common_name}}</b-list-group-item>
                <b-list-group-item>Nationality: {{this.players.nationality}}</b-list-group-item>
                <b-list-group-item>Date of birth: {{this.players.date_of_birth}}</b-list-group-item>
                <b-list-group-item>Contry of birth: {{this.players.country}}</b-list-group-item>
                <b-list-group-item>Height: {{this.players.height}}</b-list-group-item>
                <b-list-group-item>Weight: {{this.players.weight}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>      
</template>

<script>
export default {
    data(){
        return{
            players: ""
        }

    },
    methods: {
        async getPlayerDetails(){
        try {
                let player_id = this.$route.params.id.slice(1);
                const response = await this.axios.get(
                'http://localhost:4000/player/page/' + player_id ,
                {withCredentials: true}
            );
            this.players = response.data;

        } catch (error) {
            console.log(error);
            this.$router.push("/").catch(()=>{});
        }
    },
  },
  created(){
    this.getPlayerDetails();
  }
}
</script>

<style>

</style>