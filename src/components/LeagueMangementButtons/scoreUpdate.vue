<template>
    <div>
        <span v-if="!show">
            <p v-on:dblclick="show=true">{{displayValue}}</p>
        </span>
        <span v-if="show" class="score-input">
            <b-form-input v-model="newScore" :placeholder="oldScore"></b-form-input>
            <b-button pill variant="info" v-on:click="onSave" type="submit">save</b-button>
            <b-button pill variant="outline-dark" v-on:click="show=false" type="submit">cancel</b-button>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        oldScore: {
            type: String,
            required: false
        },
        match_id: {type: Number, required: true}
    },
    data(){
        return{
            newScore: "",
            show: false
        }
    },
    methods:{
        onSave(){
           if (!this.newScore){
               return
           } 
           if(!this.containsAlpha()){
               this.$root.toast("Invalid Input", "Score format is 1-1", "danger");
               return
           }
           this.$emit("add-score", {match_id: this.match_id, score: this.newScore});
           this.show = false
           this.oldScore = this.newScore
        },
        containsAlpha(){
            if(this.newScore.match(/[a-z]/i) || this.newScore.match(/[#?!@$%^&*]/i))
                return false;
            return true;
        }
    },
    computed:{
        displayValue(){
            if (!this.oldScore){
                return "Click to Edit"
            }
            return this.oldScore
        }
    }
}
</script>

<style>
.score-input{
  display: flex;
}
</style>