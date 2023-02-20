<!-- <script setup>
import { onMounted } from "vue";

onMounted(async () => {

  
const res = await fetch('')
  const response = await fetch("/config/cardToTeamMapping.json");
  const file = await response.json();
  console.log("cool file", file);
});

</script> -->


<script>

import cardToTeamMapping from '../config/cardToTeamMapping.json'

console.log(`Mapping loaded: ${JSON.stringify(cardToTeamMapping)}`)

export default {
  data() {
    return {
      mapping: cardToTeamMapping,
      selected: {}
    }
  },
  methods: {
   
  }
}
</script>



<template>
    <select v-model="selected">
  <!-- inline object literal -->
    <option v-for="card of Object.keys(mapping)">{{ card }}</option>
    </select>
</template>
