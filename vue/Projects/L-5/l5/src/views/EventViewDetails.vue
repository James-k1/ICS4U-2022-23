

<script setup>
import { ref, onMounted } from 'vue'
import EventServices from '../services/EventServices';
 
const props = defineProps({
    id: {requiered : true}
})
const event = ref(null)
 
onMounted(() => {
    EventServices.getEvent(props.id).then((responce) => {
        event.value=responce.data
    }).catch((error) => {
        console.log(error)
    })
  // fetch event (by id) and set local event data
})
</script>
 
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>