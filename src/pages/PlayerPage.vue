<template>
    <div>
        <b-card
            no-body
            style="max-width: 30rem;"
            img-src="https://placekitten.com/380/200"
            img-alt="Image"
            img-top
        >
            <template #header>
            <h4 class="mb-0">Player Name</h4>
            </template>

            <b-list-group flush>
                <b-list-group-item>Full name: </b-list-group-item> 
                <b-list-group-item>Group name:</b-list-group-item>
                <b-list-group-item>Position number:</b-list-group-item>
                <b-list-group-item>Common name:</b-list-group-item>
                <b-list-group-item>Nationality:</b-list-group-item>
                <b-list-group-item>Date of birth:</b-list-group-item>
                <b-list-group-item>Contry of birth:</b-list-group-item>
                <b-list-group-item>Height:</b-list-group-item>
                <b-list-group-item>Weight:</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>      
</template>

<script>
export default {
    computed:{
        playername(){
            return this.$root.store.state.player.players.player_id;
        }
    }
}
</script>

<style>

</style>