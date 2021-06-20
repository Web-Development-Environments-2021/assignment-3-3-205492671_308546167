<template>
  <div>
    <div class="jumbotron">
        <div class="grid">
            <div id="team-name">
                <span>Chelsea</span>
                <br>
                <span><img class="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"></span></div>
            <div id="score-label"><br><span>1-0</span></div>
            <div id="team-name">
                <span>Barcelona</span>
                <br>
                <span><img class="logo" src="https://www.logolynx.com/images/logolynx/7b/7b831ccf50ee884443dee6d5b6e6dd67.jpeg"></span> </div>
            <div></div>
            <div>
                <span>Blumfield</span><br>
                <span>05/08/2021</span><br>
                <span>19:30</span>
            </div>
            <div></div>
        </div>
      <div class="game-preview">
          <div :title="id" class="game-title">
            <b>Game Id:</b> {{ id }}
          </div>
          <ul class="game-content">
            <li> host: {{ home_team }}</li>
            <li> guest: {{ away_team }}</li>
            <li> date: {{ getDate }}</li>
            <li> time: {{ getTime }}</li>
            <li> court: {{ court }}</li>
          </ul>
      </div>
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



.game-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}

    .grid {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 1px; */
    font-family: "Copperplate", fantasy;
    }

    .grid > div {
    background-color: #374d51;
    color: white;
    font-size: 3vw;
    padding: 10px;
    text-align: center;
    }
    #team-name{
        color: #90a8ac;
        font-size: 4vw;
    }
    #score-label{
        color: white;
        font-size: 4vw;
    }
    .logo {
        height: 100px;
        width:100px;
        border-radius: 50%;
    }

</style>


