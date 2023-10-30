<template>
  <div class="rating-result">
    <div class="star-rating">
      <template v-for="index in rating">
        <img
          :key="index"
          src="~/assets/svg/star-solid.svg"
          class="star"
          alt="Star"
        />
      </template>
    </div>
    <!-- <RatingStars /> -->
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
}
</script>
