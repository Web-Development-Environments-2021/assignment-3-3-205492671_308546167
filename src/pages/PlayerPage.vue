<template>
   <div>
       <div>
        <div>
            <br>
            <b-card no-body class="overflow-hidden canana" style="max-width: 540px;" align="center">
                <b-row no-gutters>
                <b-col md="3">
                    <b-img :src="this.players.picture" rounded="circle" alt="Circle image"></b-img>
                    <b-card-text class="text-center font-weight-bold" >
                        {{this.players.fullname}} 
                    </b-card-text>
                    
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-card-title class="text-center font-weight-bolder">{{this.players.team_name}} | <b-badge variant="light">{{getPos}}</b-badge></b-card-title>
                        <hr>
                        <b-container class="bv-example-row">
                            <b-row class="text-center font-weight-bold" >
                                <b-col>Name</b-col>
                                <b-col class="font-weight-bold">Height</b-col>
                                <b-col class="font-weight-bold">Weight</b-col>
                            </b-row>
                            <b-row class="text-center">
                                <b-col>{{this.players.common_name}}</b-col>
                                <b-col>{{this.players.height}}</b-col>
                                <b-col>{{this.players.weight}}</b-col>
                            </b-row>
                            <br>
                            <b-row class="text-center" >
                                <b-col class="font-weight-bold">Nationality</b-col>
                                <b-col class="font-weight-bold">Birthdate</b-col>
                                <b-col class="font-weight-bold">Country</b-col>
                            </b-row>
                            <b-row class="text-center">
                                <b-col>{{this.players.nationality}}</b-col>
                                <b-col>{{this.players.date_of_birth}}</b-col>
                                <b-col>{{this.players.country}}</b-col>
                            </b-row>
                        </b-container>
                    </b-card-body>

                </b-col>
                </b-row>
            </b-card>
            </div>
        </div>

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
  },
      computed: {
        getPos(){
            let pos ="";
            if(this.players.position_num == 1){
                pos = "Goalkeeper";
            }
            else if(this.players.position_num == 2){
                pos = "Defender";
            }
            else if(this.players.position_num == 3){
                pos = "Midfielder";
            }
            else{
                pos = "Attacker";
            }
            return pos;
        }
    }
}
</script>

<style>
.canana {
  color: #25302B;
  background-color: #E5E5EC;
  opacity: 0.85;
  /* #9FC9B5 */
}
</style>