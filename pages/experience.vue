<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <p>World!</p>
    <CardFilter
      v-for="cardItem in $store.getters.filteredCardsStartingWithM"
      :key="cardItem.serviceName"
      :service="cardItem.serviceName"
      :business="cardItem.businessName"
      :rating-value="cardItem.rating"
    />
  </div>
</template>

<script>
import CardFilter from '~/components/CardFilter.vue'

export default {
  components: { CardFilter },
}
</script>
