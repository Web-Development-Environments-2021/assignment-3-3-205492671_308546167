<template>
  <div>
    <b-button @click="show=true" variant="primary">Create Match</b-button>

    <b-modal
      v-model="show"
      title="Create Match"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>

        <b-row class="mb-1">
          <b-col cols="3">Home Team</b-col>
          <b-col>
            <b-form-select
              v-model="home_team"
              :options="teams"
            ></b-form-select>
          </b-col>
          <b-col cols="3">Away Team</b-col>
          <b-col>
            <b-form-select
              v-model="away_team"
              :options="teams"
            ></b-form-select>
          </b-col>
        </b-row>
        <br>
        <b-row class="mb-1">
          <b-col cols="3">Date</b-col>
          <b-col>
            <b-calendar v-model="picked_date" :min="getToday" :max="getEndSeason" @context="onContext" locale="en-US"></b-calendar>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col cols="3">Referee</b-col>
          <b-col>
            <b-form-input
              v-model="referee_name"
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
            @click="onSave">
            Save
          </b-button>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        teams: ["København", "Silkeborg", "Brøndby", "SønderjyskE", "Midtjylland", "AaB", "OB",
                   "Randers", "Nordsjælland", "Viborg", "AGF", "Vejle"],
        referee_name: '',
        picked_date: '',
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerTextVariant: 'dark',
        home_team: '',
        away_team: ''

      }
    },
    computed: {
      getToday(){
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        // 15th two months prior
        return new Date(today)
      },
      getEndSeason(){
        const now = new Date();
        return new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
      },
      matchDate(){
        return this.picked_date + "T" + "21:00:00"
      }
    },
    methods: {
        onContext(ctx) {
        this.context = ctx
      },
      onSave(){
        let match = {home_team_name: this.home_team,
                     away_team_name: this.away_team,
                     date: this.matchDate,
                     referee_name: this.referee_name}
        this.$emit('add-match', match);
        this.show = false;
      }
    }
  }
</script>

<style scoped>

</style>