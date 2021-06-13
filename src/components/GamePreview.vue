<template>
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
    console.log("game preview mounted")
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



</style>
