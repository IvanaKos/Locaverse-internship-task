<template>
  <div class="my-app">
    <MyForm @card-values-updated="updateCardValues"></MyForm>
    <ServiceCard
      v-for="cardItem in cardItems"
      :key="cardItem.businessName"
      :service="cardItem.serviceName"
      :business="cardItem.businessName"
      :rating-value="cardItem.rating"
    />
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
      this.cardItems.push({
        serviceName: data.serviceName,
        businessName: data.businessName,
        rating: data.rating,
      })
    },
  },
}
</script>

<style>
.myapp {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
