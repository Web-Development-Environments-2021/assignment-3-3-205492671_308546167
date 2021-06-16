<template>
    <div>
    <b-form-group label="Postions" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="1">GK</b-form-radio>  
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="2">DEF</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="3">MID</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="4">ATT</b-form-radio>
    </b-form-group>

    <p>TEAM</p>
    <div class="team-filter-container">
    <b-form-input class="team-filter-input" v-model="team_filter"></b-form-input>
    <b-button v-on:click="TeamFilter">filter</b-button>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
        team_filter: '',
        selected: ''
        }
    },
    methods: {
        TeamFilter(){
            this.$emit('filter-results', 'team_name', this.team_filter)
        }
    },
    computed: {
        selectPosFilter(){
            if (this.selected){
                this.$emit('filter-results', 'position_num', this.selected);
            }
            return this.selected;

        }
    }
}
</script>

<style scoped>
.team-filter-container {
    display: flex;
}
.team-filter-input {
    width: 100px;
}
</style>