<template>
    <div>
       <b-table striped hover :items="pre_matches">
         <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template #cell(eventlog)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>

      <template #row-details="row">
        <div class="eventlog">
          <event v-for="e in row.item.eventlog" :event="e" :key="e.min_in_game"></event>
        </div>
      </template>
       </b-table>
       <b-table striped hover :items="post_matches">
         <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template #cell(eventlog)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>

      <template #row-details="row">
        <div class="eventlog">
          <event v-for="e in row.item.eventlog" :event="e" :key="e.min_in_game"></event>
        </div>
      </template>
       </b-table>
    </div>
</template>

<script>
import event from '../components/event.vue'
export default {
  components: { event },

  data(){
    return{
      pre_matches: [],
      post_matches: []
    }
  },
  methods: {
    async get_current_fixture(){
      try{
      const response = await this.axios.get("http://localhost:4000/league/current_fixture");   
      this.pre_matches = response.data.pre_played_matches;   
      this.post_matches = response.data.post_played_matches;
      }
      catch{
        console.log("something went wrong");
        this.$route.push("*");
      }
    }
  },
  mounted() {
    this.get_current_fixture();
  }

  
}
</script>

<style>

</style>