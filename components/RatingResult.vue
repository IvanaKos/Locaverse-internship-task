<template>
  <div class="rating-result">
    <div class="star-rating">
      <template v-for="index in starNumber">
        <img
          :key="index"
          src="~/assets/svg/star-solid.svg"
          class="star"
          alt="Star"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    starNumber: {
      type: Number,
      default: 0,
    },
  },
}
</script>
