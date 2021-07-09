<template>
  <b-card class="event" >
    <b-row class="mb-2">
        <b-col sm="3" class="text-sm-right"><b>Minute:</b></b-col>
        <b-col>{{ event.min_in_game }}</b-col>
    </b-row>

    <b-row class="mb-2">
        <b-col sm="3" class="text-sm-right"><b>Event Type:</b></b-col>
        <b-col>{{ event.event_type }}</b-col>
    </b-row>

    <b-row class="mb-2">
        <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
        <b-col>{{ event.description }}</b-col>
    </b-row>

</b-card>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            require: true
        }
    }
}
</script>

<style>
.event{
    background-color: transparent;
}
</style>