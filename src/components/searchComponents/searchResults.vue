<template>
<div>
  <div v-if="selectedMainSearch == 'player' && emptyQuery">
      <div v-for="p in results" :key="p.player_id">
          <span>
            <player-preview
              :player_id="p.player_id"
              :fullname="p.fullname" 
              :team_name="p.team_name" 
              :position_num="p.position_num" 
              :picture="p.picture" 
              :key="p.fullname">
            </player-preview>
          </span>
      </div>
    </div>
    <div v-if="selectedMainSearch == 'team' && emptyQuery">
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
import PlayerPreview from '../PlayerPreview.vue';
export default {
    components: { PlayerPreview },
    props: {
        results:{
            type: Array,
            required: true
        },
        selectedMainSearch: {
            type: String,
            required: true
        },
        emptyQuery: { 
            type: String,
            required: true
          }
    }

}
</script>

<style>

</style>