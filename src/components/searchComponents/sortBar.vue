<template>
         <div class="mb-3">
            <b-button v-b-toggle.my-collapse class="sort-button"><span class="sort-padding">Sort By</span><b-icon-toggles></b-icon-toggles></b-button>
         
            <b-collapse id="my-collapse">
                <b-col cols="12">
                <b-form-select label-field="Sort By" v-if="sort || true" v-model="selectedSort" :options="options"></b-form-select>
                </b-col>
            </b-collapse>
           </div>
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
        sort(){
            this.$emit('sort-results', this.selectedSort);
            return this.selectedSort;
        }
    }

}
</script>

<style scoped>

.sort-button{
    /* border: solid 2px red; */
    margin: 10px;
    width: 110px;
    height: 40px;
    /* display: flex; */
}

.sort-padding{
    padding-right: 10px;
}

.b_form{
    margin-left: 20px;
}
</style>