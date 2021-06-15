<template>
<div>
  <div v-if="selectedMainSearch == 'player'">
      <div v-for="p in results" :key="p.player_id">
          <span>
            {{p.fullname}}
          </span>
      </div>
    </div>
    <div v-if="selectedMainSearch == 'team'">
      <div v-for="t in results" :key="t.team_id">
          <span>
            {{t.team_name}}
          </span>
      </div>
    </div>
    <p v-if="!results.length">
      im sorry but no search results fitted you query 
    </p>
</div>
</template>

<script>
export default {
    props: {
        results:{
            type: Array,
            required: true
        },
        selectedMainSearch: {
            type: String,
            required: true
        }
    }

}
</script>

<style>

</style>