<template>
    <b-form-group v-slot="{ ariaDescribedby }">
    <b-form-radio-group
    id="btn-radios-1"
    v-model="selectedSort"
    :options="options"
    :aria-describedby="ariaDescribedby"
    name="radios-btn-MainSort"
    buttons
    ></b-form-radio-group>
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

<style>

</style>