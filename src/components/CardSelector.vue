<script>
export default {
  props: {
    cards: Array
  },
  emits: ['card-selected']
}

</script>

<!-- This component handles displaying UI for selecting a card, along with
     emitting an event when a selection occurs.
 -->
<template>
    <!-- https://vuejs.org/guide/components/events.html#event-arguments -->
    <select @change="$emit('card-selected', $event.target.value)">
    <option v-for="card of cards">{{ card }}</option>
    </select>
</template>
