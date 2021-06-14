<template>
    <div>
        <b-card
            no-body
            style="max-width: 20rem;"
        >
            <template #header>
            <h4 class="mb-0">Player Name</h4>
            </template>
            <b-img :src="this.$root.store.state.player.players.image_path"></b-img>
            <b-list-group flush>
                <b-list-group-item>Full name: {{this.$root.store.state.player.players.fullname}}</b-list-group-item> 
                <b-list-group-item>Group name:  {{this.$root.store.state.player.players.team_id}}</b-list-group-item>
                <b-list-group-item>Position number:{{this.$root.store.state.player.players.position_id}}</b-list-group-item>
                <b-list-group-item>Common name: {{this.$root.store.state.player.players.common_name}}</b-list-group-item>
                <b-list-group-item>Nationality: {{this.$root.store.state.player.players.nationality}}</b-list-group-item>
                <b-list-group-item>Date of birth: {{this.$root.store.state.player.players.birthdate}}</b-list-group-item>
                <b-list-group-item>Contry of birth: {{this.$root.store.state.player.players.birthcountry}}</b-list-group-item>
                <b-list-group-item>Height: {{this.$root.store.state.player.players.height}}</b-list-group-item>
                <b-list-group-item>Weight: {{this.$root.store.state.player.players.weight}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>      
</template>

<script>
export default {
    data(){
        return{
           
        }
    }
}
</script>

<style>

</style>