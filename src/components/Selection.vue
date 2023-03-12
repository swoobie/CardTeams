<script>
export default {
    props: {
        selectedCards: Array
    },
    emits: ['remove']
}
</script>


<!-- This component handles displaying what's been selected
     It might need sub-components for each card displayed.
     When a card is clicked, emit an event so the parent knows
     to remove the card. This is how the deselect will be done.
-->
<template>
    <h1>Selected Cards</h1>

    <li v-for="card in this.selectedCards" @click="$emit('remove', card)">
    {{ card }}
    </li>
</template>