<script>
import config from '../config/marvel_united_teams.json'
import CardSelector from "../components/CardSelector.vue"
import TeamResults from "../components/TeamResults.vue"
import Selection from "../components/Selection.vue"


export default {
  data() {
    return {
      selectedCards: [],
      teams: [],
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

    // Parsing the map to be Card -> Team format instead of team to card format
    parseMapping(cardMappingConfig) {
      console.log("Parsing the config...")
      let newMap = {}
      let globalTeams = []
      for (let team in cardMappingConfig) {
        console.log("Checking team: " + team)

        let cards = cardMappingConfig[team]
        console.log("Full card list is " + JSON.stringify(cards))

        for (let card of cards) {
          // special handling for case where a team can have anyone
          if (card === "ALL_HEROES") {
            globalTeams.push(team)
            continue
          }

          if (!newMap[card])
            newMap[card] = []

          if (!newMap[card].includes(team))
            newMap[card].push(team)
        }
      }

      for (let cardMapping in newMap) {
        newMap[cardMapping].push(...globalTeams)
      }


      return newMap
    },
    removeEventHandler(cardToRemove) {
      this.selectedCards = this.selectedCards.filter(card => card !== cardToRemove)
      this.updateTeams()
    },
    cardSelectedEventHandler(card) {
      console.log("Selected " + card)
      this.selectedCards.push(card)
      this.updateTeams()
    },
    updateTeams() {
      // make a new set to recalculate the team
      let teamSet = new Set()
      // loop through all the selected cards
      for (let card of this.selectedCards) {
        let tmpSet = new Set()
        for (let team of this.cardTeamMapping[card]) {
          tmpSet.add(team)
        }

        // if this is the first card, just use the same set
        if (teamSet.size === 0) {
          teamSet = new Set(tmpSet)
        } else {
          // find the intersection and keep that
          teamSet = this.intersection(teamSet, tmpSet)
        }
      }

      // spread the set out to the component data array
      this.teams = [...teamSet]
    },
    intersection(setA, setB) {
      const _intersection = new Set();
      for (const elem of setB) {
        if (setA.has(elem)) {
          _intersection.add(elem);
        }
      }
      return _intersection;
    },
    log(message) {
      console.log(message)
    }
  }
}



</script>

<template>
  <h1>This is a home page.</h1>
  <div class="home">
    <CardSelector :cards="Object.keys(this.cardTeamMapping).sort()"
      @card-selected="(selection) => this.cardSelectedEventHandler(selection)" />
    <div class="results">
      <div>
        <Selection :selectedCards="this.selectedCards" @remove="(card) => this.removeEventHandler(card)" />
      </div>
      <div>
        <TeamResults :teams="this.teams" />
      </div>
    </div>
  </div>
</template>

<style>
.results {
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>
