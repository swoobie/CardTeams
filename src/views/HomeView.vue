<script>
import config from '../config/marvel_united_teams.json'
import CardSelector from "../components/CardSelector.vue"
import TeamResults from "../components/TeamResults.vue"
import Selection from "../components/Selection.vue"


export default {
  data() {
    return {
      selectedCards: [],
      cardTeamMapping: {}
    }
  },
  components: {
    CardSelector,
    TeamResults,
    Selection 
  },
  mounted() {
    this.cardTeamMapping = this.parseMapping(config)
    console.log(`Mapping loaded: ${JSON.stringify(this.cardTeamMapping)}`)
  },
  methods: {
    setCard(card) {
      console.log("Selected " + card)
      this.selectedCards.push(card)

      // need to add the selected card to a property that is then bound to the TeamResults view
      // to auto update team results with the selections

      // also need to add a component showing the selected cards and that can be where selecting a card removes it.
      // likely by making some label buttons that send a click event back to this component where it can then remove
      // the card from the same list used for populating team results
    },
    // Parsing the map to be Card -> Team format instead of team to card format
    parseMapping(cardMappingConfig) {
      console.log("Parsing the config...")
      let newMap = {}
      for (let team in cardMappingConfig) {
        console.log("Checking team: " + team)

        let cards = cardMappingConfig[team]
        console.log("Full card list is " + JSON.stringify(cards))

        for (let card of cards) {
          if (!newMap[card])
            newMap[card] = []
          
          if(!newMap[card].includes(team))
            newMap[card].push(team)
        }
      }

      console.log("New Mapping computed as: \n" + JSON.stringify(newMap))
      return newMap
    }
  }
}



</script>

<template>
  <h1>This is a home page.</h1>
  <div class="home">
    <CardSelector :cards="Object.keys(this.cardTeamMapping).sort()" @response="(selection) => this.setCard(selection)"/>
    <TeamResults />
    <div>
      <Selection :selectedCards="this.selectedCards"/>
    </div>
  </div>
</template>


