<template>
  <div>
        <div class="grid">
            <div id="team-name">
                <span>{{ home_team }}</span>
                <br>
                <span><img class="logo" v-bind:src="home_team_logo"></span></div>
            <div id="score-label"><br><span>1-0</span></div>
            <div id="team-name">
                <span>{{ away_team }}</span>
                <br>
                <span><img class="logo" v-bind:src="away_team_logo"></span> </div>
            <div>
            </div>
            <div>
              <span>{{ court }}</span><br>
              <span>{{ getDate }}</span><br>
              <span>{{ getTime }}</span>
            </div>
            <div></div>
        </div>
    </div>


  
  
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      id: {
        type: Number,
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
  width:500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: "Copperplate", fantasy;
}

.grid > div {
background-color: #374d51;
color: white;
font-size: medium;
padding: 10px;
text-align: center;
}
#team-name{
    color: #90a8ac;
    font-size: 3vw;
}
#score-label{
    color: white;
    font-size: 3vw;
}
.logo {
    height: 70px;
    width:70px;
    /* border-radius: 50%; */
}



</style>


