<template>
<div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <div v-if="results.length && results[0].fullname">
    <div class="content">
      <div class="container">
        <div class="row">
          <div v-for="p in results" :key="p.player_id">
                <PlayerPreviewNG
                  :player_id="p.player_id"
                  :fullname="p.fullname" 
                  :team_name="p.team_name" 
                  :position_num="p.position_num" 
                  :picture="p.picture" 
                  :key="p.fullname">
                </PlayerPreviewNG>
          </div>
      </div>
        <!-- end row -->
    </div>
    <!-- container -->
    </div>
  </div>
 
    <div v-if="results.length && results[0].team_id">
      <div class="content">
      <div class="container">
        <div class="row">
          <div class="team-results" v-for="t in results" :key="t.team_id">
          <team-preview style="box-shadow=none"
          :team_id="t.team_id"
          :team_name="t.team_name"
          :team_logo="t.image"
          :key="t.team_id">
          </team-preview>
          </div>
        </div>
        <!-- end row -->
      </div>
    <!-- container -->
    </div>
  </div>
</div>

</template>

<script>
import PlayerPreviewNG from '../PlayerPreviewNG.vue';
import TeamPreview from '../teamPreview.vue';
export default {
    components: { TeamPreview, PlayerPreviewNG },
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

<style scoped>
.team-results{
  display: flex;

}
</style>