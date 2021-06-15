<template>
    <b-form-group v-slot="{ ariaDescribedby }">
    <div class="sort_container">
    <p>sort by:</p>
    <b-form-radio-group class = "b_form"
    id="btn-radios-1"
    v-model="selectedSort"
    :options="options"
    :aria-describedby="ariaDescribedby"
    name="radios-btn-MainSort"
    buttons>
    </b-form-radio-group>
    </div>
    <p v-if="selectedSort">sorting by: {{selectsort}}</p>
</b-form-group>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return{
            selectedSort: ''
        }
    },
    computed: {
        selectsort(){
            this.$emit('sort-results', this.selectedSort);
            return this.selectedSort;
        }
    }

}
</script>

<style scoped>

.sort_container{
    /* border: solid 2px red; */
    display: flex;
}

.b_form{
    margin-left: 20px;
}
</style>