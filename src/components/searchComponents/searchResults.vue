<template>
<div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <div v-if="selectedMainSearch == 'player' && emptyQuery">
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
      <div class="row">
        <div class="col-12">
            <div class="text-right">
                <ul class="pagination pagination-split mt-0 float-right">
                    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span> <span class="sr-only">Previous</span></a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span> <span class="sr-only">Next</span></a></li>
                </ul>
            </div>
        </div>
      </div>
        <!-- end row -->
    </div>
    <!-- container -->
    </div>
  </div>
 
    <div v-if="selectedMainSearch == 'team' && emptyQuery">
      <div v-for="t in results" :key="t.team_id">
          <team-preview 
          :team_id="t.team_id"
          :team_name="t.team_name"
          :team_logo="t.image"
          :key="t.team_id">
          </team-preview>
      </div>
    </div>
    <p v-if="!results.length">
      im sorry but no search results fitted you query 
    </p>
</div>

</template>

<script>
import PlayerPreview from '../PlayerPreview.vue';
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

</style>