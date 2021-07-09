<template>
    <div class="league-preview">
      <b-card class="leauge-info-card">
      <b-card-img src="https://res.cloudinary.com/dswkzsdoq/image/upload/v1625860678/1200px-Superliga_2010.svg_hvaenv.png"></b-card-img>
      <!-- <b-card-title>{{leagueName}}</b-card-title> -->
      <b-card-text>
        <br/>
        <span class="bold">Season:</span> {{ season }}
        <br/>
        <span class="bold">Stage:</span> {{ stage }}
        <br/>
        <br/>
      </b-card-text>
      <b-card-body class="carousel">
        <b-carousel 

          :interval="4000"
          controls
          indicators
          background="transparent"
          style= "width:220px; right:18%;"
        >

          <b-carousel-slide 
            img-blank img-alt="Blank image"
            v-for="t in teams" :key="t.team_id"
          >
            <teamPreview class="teamPrev"
              :team_id="t.team_id"
              :team_name="t.team_name"
              :team_logo="t.image">
            </teamPreview>
          </b-carousel-slide>
        </b-carousel>
        </b-card-body>
    </b-card>
 
                  
  </div>
</template>

<script>
  import teamPreview from '../components/teamPreview.vue';
export default {
  components: {teamPreview },
 data() {
    return {
      leagueName: "Superliga", 
      season: "2020-2021", 
      stage: "Champions",
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
  /* display: inline-block; */
  width: 250px;
  /* height: 20px; */
  position: relative;
  margin: 10px 10px;

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
</style>