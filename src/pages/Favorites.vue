<template>
  <div>
    <b-card class="favorite-matches">
      <favorite-games></favorite-games>
    </b-card>
  </div>
</template>

<script>
import FavoriteGames from '../components/FavoriteGames.vue'
export default {
  components: { FavoriteGames },
  created(){
    if (!this.$root.store.state.user.username){
        this.$router.push("*");
    }
  }
}
</script>

<style>
.favorite-matches{
  width: 50%;
  align-content: center;
  left: 25%;
  background: transparent;
}
</style>