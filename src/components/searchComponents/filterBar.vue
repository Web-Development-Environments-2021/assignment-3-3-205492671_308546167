<template>
    <div>
    <b-form-group  v-slot="{ ariaDescribedby }">
        <label class="bold">Positions:</label>
      <b-form-radio v-if="selectPosFilter" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="1">Goalkeeper</b-form-radio>  
      <b-form-radio v-if="selectPosFilter" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="2">Defender</b-form-radio>
      <b-form-radio v-if="selectPosFilter" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="3">Midfield</b-form-radio>
      <b-form-radio v-if="selectPosFilter" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="4">Attacker</b-form-radio>
      
    </b-form-group>

    <p class="bold">Team:</p>
    <div class="team-filter-container">
    <b-form-input class="team-filter-input" v-model="team_filter"></b-form-input>
    <b-button v-on:click="TeamFilter">Filter</b-button>
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
            return true

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
.bold{
    font-weight: bold;
}
</style>