<template>
  <div>
    <h1>Service Cards Starting with "m"</h1>
    <p class="service-name">{{ service || 'No service name' }}</p>
    <p class="business-name">{{ business || 'No business name' }}</p>
    <RatingResult :star-number="ratingValue" />
  </div>
</template>
<script>
export default {
  props: {
    service: {
      type: String,
      default: 'No service',
    },
    business: {
      type: String,
      default: 'No business',
    },
    ratingValue: {
      type: Number,
      default: 0,
    },
  },
}
</script>
