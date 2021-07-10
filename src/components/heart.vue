<template>
    <div class="favoriting">
        <label
                class="favorite__heart"
                v-bind:class="{'favorite__heart__selected': value}">
            <input
                    class="favorite__checkbox"
                    type="checkbox"
                    v-bind:name="name"

                    v-on:click="addFavorite">
                    
            ❤
        </label>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props: {
        'name': {
            type: String,
            default: 'favorite'
        },
        value: {
            type: Boolean,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        addFavorite() {
            if (!this.$root.store.state.user.username){
                this.$root.toast("add favorites", "please log in beforehand", "danger");
                return
            }
            if (!this.value){
                this.value = true;
                this.$emit("add-favorite", this.index);
            }
        }
    }
}
</script>

<style>
.favoriting{
    display: inline-block
}
.favorite__heart {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 16px;
    color: #ABABAB;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
.favorite__heart.is-disabled:hover {
     cursor: default;
 }
.favorite__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.favorite__heart__selected{
    color: #df470b;
}
</style>