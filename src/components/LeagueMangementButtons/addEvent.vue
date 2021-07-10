<template>
  <div>
    <b-button @click="show=true" variant="dark">Add Event</b-button>

    <b-modal
      v-model="show"
      title="Add Event"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>

        <b-row class="mb-1">
          <b-col cols="3">{{match.home_team}}</b-col>
          <b-col cols="2">VS</b-col>
          <b-col cols="2">{{match.away_team}}</b-col>
        </b-row>
        <br>
        <b-row class="mb-1">
          <b-col cols="3">Event Type</b-col>
          <b-col>
            <b-form-select
              v-model="event_type"
              :options="event_types"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">Event Minute</b-col>
          <b-col>
            <b-form-input
              v-model="min_in_game"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">Description</b-col>
          <b-col>
            <b-form-input
              v-model="description"
            ></b-form-input>
          </b-col>
        </b-row>
          
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left"></p>
            <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
            <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="onSave">
            Save
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:{
        match: {type: Object, required: true}
    },
    data() {
      return {
        show: false,
        event_types: ["Yellow Card", "Red Card", "Goal", "OffSide", "Foul", "Injury", "Substation"],
        event_type: '',
        description: '',
        min_in_game: '',
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerTextVariant: 'dark',
      }
    },
    methods: {
        onContext(ctx) {
        this.context = ctx
      },
      onSave(){
        this.$emit('add-event',
        {match_id: this.match.match_id,
         event: {
          date: this.match.date,
          min_in_game: this.min_in_game,
          event_type: this.event_type,
          description: this.description}
        });
        this.show = false;
      }
    }
  }
</script>

<style scoped>
  .float-right{
    margin-right:5px;
  }
</style>