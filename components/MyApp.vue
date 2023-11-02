<template>
  <div class="my-app">
    <MyForm @card-values-updated="updateCardValues"></MyForm>
    <div class="card-container">
      <ServiceCard
        v-for="cardItem in $store.state.cardItems"
        :key="cardItem.businessName"
        :service="cardItem.serviceName"
        :business="cardItem.businessName"
        :rating-value="cardItem.rating"
      />
    </div>
  </div>
</template>

<script>
import MyForm from '~/components/MyForm.vue'
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  components: {
    MyForm,
    ServiceCard,
  },

  data() {
    return {
      cardItems: [],
    }
  },

  methods: {
    updateCardValues(data) {
      this.$store.commit('updateCardItems', {
        serviceName: data.serviceName,
        businessName: data.businessName,
        rating: data.rating,
      })
    },
  },
}
</script>

<style>
.my-app {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
</style>
