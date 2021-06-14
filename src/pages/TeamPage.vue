<template>
    <div>
    <PlayerPreview
      v-for="g in games"
      :id="g.match_id" 
      :home_team="g.home_team" 
      :away_team="g.away_team" 
      :date="g.date" 
      :court="g.court"
      :key="g.id"></PlayerPreview>
  </div>
</template>

<script>
import PlayerPreview from '../components/PlayerPreview.vue'
export default {
  components: { PlayerPreview },
    data() {
      return {
        players: this.$root.store.state.favorite_matches.matches,
      };
  }

}
</script>

<style>

</style>