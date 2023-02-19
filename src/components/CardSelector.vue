<script>



export default {
  data() {
    return {
        cardToTeamMapping:[] 
    }
  }
}
</script>

<template>
    <select v-model="selected">
  <!-- inline object literal -->
    <option :value="{ number: 123 }">123</option>
    </select>
</template>
