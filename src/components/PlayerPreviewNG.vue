<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <div class="col-lg-12">
                        <div class="text-center card-box">
                            <div class="member-card pt-2 pb-2">
                                <div class="thumb-lg member-thumb mx-auto"><img v-bind:src="picture" class="rounded-circle img-thumbnail" alt="profile-image"></div>
                                <div class="">
                                    <h4>{{fullname}}</h4>
                                    <p class="text-muted">{{team_name}} <span>| </span><span class="text-pink">{{getPos}}</span></p>
                                </div>
                                <button type="button" v-on:click="goToPlayerPage" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"> Visit</button>
               
                            </div>
                        </div>
                    </div>
    </div>
</template>


<script>
export default {
    name: "PlayerPreview",
    props: {
        player_id: {
            type: Number,
            required: true
        },
        fullname: {
            type: String,
            required: true,
        },
        team_name: {
            type: String,
            required: true,
        },
        position_num: {
            type: Number,
            required: false
        },
        picture: {
            type: String,
            required: true
        }
    },
    methods: {
        goToPlayerPage(){
            let path = '/player/page:' + this.player_id
            this.$router.push(path)
        }

    },
    computed: {
        getPos(){
            let pos ="";
            if(this.position_num == 1){
                pos = "Goalkeeper";
            }
            else if(this.position_num == 2){
                pos = "Defender";
            }
            else if(this.position_num == 3){
                pos = "Midfielder";
            }
            else{
                pos = "Attacker";
            }
            return pos;
        }
    }

}
</script>
<style>
.body{
    background:#DCDCDC;
    margin-top:20px;
}
.card-box {
    padding: 10px;
    border-radius: 1px;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 10% ;
}


.thumb-lg {
    height: 88px;
    width: 88px;
}
.img-thumbnail {
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    max-width: 100%;
    height: auto;
}
.text-pink {
    color: #ff679b!important;
}
.btn-rounded {
    border-radius: 2em;
}
.text-muted {
    color: #98a6ad!important;
}
h4 {
    line-height: 22px;
    font-size: 18px;
}
</style>