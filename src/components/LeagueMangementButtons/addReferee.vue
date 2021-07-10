<template>
  <div>
    <b-button @click="show=true" variant="dark">{{button_name}}</b-button>

    <b-modal
      v-model="show"
      :title="button_name"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>

        <b-row>
          <b-col cols="3">User name</b-col>
          <b-col>
            <b-form-input
              v-model="new_referee_name"
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
    props: {
      button_name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        show: false,
        new_referee_name: '',
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
        let new_ref = {username: this.new_referee_name}
        this.$emit('add-referee', new_ref);
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