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

    <li class="selected-cards" v-for="card in this.selectedCards" @click="$emit('remove', card)">
        <div class="card">
            <div class="title">{{ card }} </div>
            <div class="remove-link">Click to Remove</div> 
        </div>
    </li>
</template>

<style>

.selected-cards {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color: aliceblue;
  color: black;
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  list-style-type: none;
  padding: 10px;
}

/* On mouse-over, add a deeper shadow */
.selected-cards:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

li {
    margin-bottom: 5px;
}

.remove-link {
    justify-self: end;
    align-self: center;
    color: rgb(71, 71, 255);
}

.title {
    justify-self: start;
    align-self: center;
}

.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>