<template>
  <div>
      <favorite-games></favorite-games>
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

</style>