<script>
export default {
    props: {
        selectedCards: Array,
        cardsMapping: Object
    }
}
</script>

<!-- This component displays the possible teams based on the selected cards -->
<template>
<div>
    <h1>Team Results for Cards: {{ this.selectedCards }}</h1>
</div>
</template>