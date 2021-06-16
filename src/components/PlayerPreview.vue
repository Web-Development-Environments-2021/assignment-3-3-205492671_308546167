<template>
    <div>
        <div id="player-preview" class="full-height p-4">
            <b-card
                no-body
                style="max-width: 12rem; border-radius:50%"
                :img-src= picture
                bg-variant="light"
            >
                <template #header>
                <h4 class="mb-0" id="player-name-label" @click="goToPlayerPage()">{{ fullname }}</h4>
                </template> 
                
                <b-list-group flush id = "list-group">
                    <b-list-group-item variant="primary">Team name: {{ team_name }}</b-list-group-item>
                    <b-list-group-item >Position number:
                        <b-badge variant="primary" pill>{{ position_num }}</b-badge>
                    </b-list-group-item>
                
                </b-list-group>
            </b-card>             
        </div>
    </div>

</template>

<script>
export default {
    name: "PlayerPreview",
    props: {
        player_id: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true,
        },
        team_name: {
            type: String,
            required: true,
        },
        position_num: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        }
    },
    methods: {
        goToPlayerPage(){
            let path = '/player/page:' + this.player_id
            this.$router.push(path)
        }

    },

}
</script>

<style>

    #list-group {
        background-color: darkblue;
        text-align: center;
        display: inline-flex;
        flex-direction: row;
    }

    #player-name-label{
        text-align: center;
    }

    .overflow-hidden{
        max-width: 500px;
        margin-left: auto;
        margin-right:auto;
    }
        


    .column {
  float: left;
  width: 20%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

</style>


        <!-- <div class="row">
            <div class="column">
                <div class="card">
                    <img src="https://cdn.sportmonks.com/images/soccer/players/9/37418793.png" alt="Jane" style="width:100%; border-radius:50%;">
                    <div class="container">
                        <h2>{{this.$root.store.state.player.players.fullname}}</h2>
                        <p class="title">CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div> -->

       
        <!-- <div>
            <br>
            <b-card bg-variant="light" no-body class="overflow-hidden px-1 pt-2">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="https://cdn.sportmonks.com/images/soccer/players/9/37418793.png" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Player Preview">
                        <b-list-group flush id = "list-group">
                            <b-list-group-item variant="secondary">Full name:<br> {{this.$root.store.state.player.players.fullname}}</b-list-group-item> 
                            <b-list-group-item>Group name:  {{this.$root.store.state.player.players.team_name}}</b-list-group-item>
                            <b-list-group-item>Position number: {{this.$root.store.state.player.players.position_num}}</b-list-group-item>
                
                        </b-list-group>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div> -->