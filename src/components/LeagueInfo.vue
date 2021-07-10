<template>
    <div class="league-preview">

        <div class="next-match"> 
        <game-preview  v-if="match"
        :id="match.match_id" 
        :home_team="match.home_team" 
        :away_team="match.away_team" 
        :home_team_logo="match.home_team_logo" 
        :away_team_logo="match.away_team_logo" 
        :date="match.date" 
        :court="match.court"
        :score="match.score"
        ></game-preview>
        </div>
        <br>

      <b-card class="leauge-info-card">
      <b-row>
        <b-col cols="5">
          <b-card-img class="superliga-logo" src="https://res.cloudinary.com/dswkzsdoq/image/upload/v1625860678/1200px-Superliga_2010.svg_hvaenv.png"></b-card-img>
      <b-card-text>
        <br/>
        <span class="bold">Season:</span> {{ season }}
        <br/>
        <span class="bold">Stage:</span> {{ stage }}
        <br/>
        <br/>
      </b-card-text>
        </b-col>
        <b-col cols="7">
<b-card-body >
        <b-carousel class="carousel"

          :interval="4000"
          controls
          indicators
          background="transparent"
          style= "right:18%;"
        >

          <b-carousel-slide 
            img-blank img-alt="Blank image"
            v-for="t in $root.store.state.search.all_teams" :key="t.team_id"
          >
            <teamPreview class="teamPrev"
              :team_id="t.team_id"
              :team_name="t.team_name"
              :team_logo="t.image">
            </teamPreview>
          </b-carousel-slide>
        </b-carousel>
        </b-card-body>
        </b-col>
      
      </b-row>
      
    </b-card>

 
                  
  </div>
</template>

<script>
  import teamPreview from '../components/teamPreview.vue';
import GamePreview from './GamePreview.vue';
export default {
  components: {teamPreview, GamePreview },
  props:{
    leagueName: {type: String}, 
      season: {type: String}, 
      stage: {type: String},
      match: {type: Object}
  },
 data() {
    return {
      teams: ""
    };
  },
  created(){
    this.teams = this.$root.store.state.search.all_teams;
  }
}
</script>

<style>
.league-preview {
  width: 70%;
  position: relative;

}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}
.bold{
  font-weight: bold;
}

.leauge-info-card{
   background-color: #E5E5EC;
  opacity: 0.85;
}
.superliga-logo{
  width: 50%;
}
.carousel{
  width: 220px;
}

</style>