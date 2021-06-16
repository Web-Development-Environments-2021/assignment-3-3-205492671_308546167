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
              v-model="headerBgVariant"
              :options="teams"
            ></b-form-select>
          </b-col>
          <b-col cols="3">Away Team</b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="teams"
            ></b-form-select>
          </b-col>
        </b-row>
        <br>
        <b-row class="mb-1">
          <b-col cols="3">Date</b-col>
          <b-col>
            <b-calendar v-model="picked_date" @context="onContext" locale="en-US"></b-calendar>
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
        footerTextVariant: 'dark'
      }
    },
    methods: {
        onContext(ctx) {
        this.context = ctx
      },
      onSave(){
          debugger;
          let match = this.teams
          let date = this.picked_date
      }
    }
  }
</script>

<style scoped>

</style>