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
    
    <li v-for="team in this.teams">
    {{ team }}
    </li>
</div>
</template>