<script>
export default {
  data() {
    return {
      deckData: null,
      cardData: null,
      deckCardsData: [],
    };
  },
  methods: {
    fetchDeck() {
      const Url =
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      fetch(Url)
        .then((response) => response.json())
        .then((data) => {
          this.deckData = data;
          this.deckCards = null;
          this.deckCardsData = [];
        });
    },
    fetchCard(deckId) {
      const Url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
      fetch(Url)
        .then((response) => response.json())
        .then((data) => {
          this.cardData = data;
          this.deckCardsData = [];
        });
    },
    fetchAllCards(deckId, remaining) {
      const Url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=
        ${remaining}`;
      fetch(Url)
        .then((response) => response.json())
        .then((data) => {
          this.deckCardsData = data.cards;
        });
    },
  },
};
</script>

<template>
  <h2>My Deck</h2>
  <button @click="fetchDeck">Get my Deck</button>
  <div v-if="deckData">
    <button @click="fetchCard(deckData.deck_id)">Get my Card</button>
    <div v-if="cardData">
      <img :src="cardData.cards[0].image" />
    </div>
    <button @click="fetchAllCards(deckData.deck_id, deckData.remaining)">
      Get all Cards
    </button>
    <div v-if="deckCardsData.length > 0">
      <div v-for="(card, index) in deckCardsData" :key="index">
        <img :src="card.image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  float: left;
  margin-right: -160px;
}
</style>