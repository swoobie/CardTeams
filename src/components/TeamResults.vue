<script>
export default {
    props: {
        teams: Array,
    }
}
</script>

<!-- This component displays the possible teams based on the selected cards -->
<template>
<div>
    <h1>Team Results for Cards</h1>
    
    <li class="teams" v-for="team in this.teams">
    {{ team }}
    </li>
</div>
</template>

<style>

.teams {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  list-style-type: none;
  padding: 10px;
  background-color: aliceblue;
  color: black;
}

/* On mouse-over, add a deeper shadow */
.teams:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>