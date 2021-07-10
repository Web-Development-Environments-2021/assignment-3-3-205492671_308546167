<template>
  <div>
        <br>
        <div class="grid">
            <div id="team-name">
                <span>{{ home_team }}</span>
                <br>
                <span><img class="logo" v-bind:src="home_team_logo"></span></div>
            <div id="middle-col">
              <span v-if="score" id="score">{{score}}</span>
              <span v-else id="score">VS</span><br><br>
              <span>{{ court }}</span><br>
              <span>{{ getDate }}</span><br>
              <span>{{ getTime }}</span>
            </div>
            <div id="team-name">
                <span>{{ away_team }}</span>
                <br>
                <span><img class="logo" v-bind:src="away_team_logo"></span> </div>
            
          
        </div>
    </div>


  
  
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      id: {
        required: true
      },
      home_team: {
        type: String,
        required: true
      },
      away_team: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      court: {
        type: String,
        required: true
      }
      ,
      home_team_logo: {
        type: String,
        required: true
      }
      ,
      away_team_logo: {
        type: String,
        required: true
      }
      ,
      score: {
        type: String,
        required: false
      }
  },
  computed: {
    // a computed getter
    getTime: function () {
      // `this` points to the vm instance
      return this.date.split('T')[1]
    },
    getDate: function() {
      return this.date.split('T')[0]
    }
  }, 
  mounted(){
  } 
};
</script>

<style>


.grid {
  border-style: solid;
  border-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: "Arial", San-serif;
}

.grid > div {
background-color: #2c3e50;
color: white;
font-size: medium;
padding: 10px;
text-align: center;
}

#team-name{
    color: #90a8ac;
    font-size: 2vw;
}
#middle-col{
    color: white;
    font-size: 1vw;
}
#score{
    color: white;
    font-size: 2vw;
}
.logo {
    height: 60%;
    width:60%;
}

</style>


