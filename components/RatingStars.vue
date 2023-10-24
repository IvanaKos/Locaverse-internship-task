<template>
  <div>
    <div class="rating">
      <span v-for="star in 5" :key="star" @click="setRating(star)">
        <img
          :src="
            star <= rating
              ? require('~/assets/svg/star-solid.svg')
              : require('~/assets/svg/star-regular.svg')
          "
          class="star"
          alt="Star"
          @click="setRating(star)"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rating: 0,
    }
  },
  methods: {
    setRating(star) {
      this.rating = star
      this.$emit('input', star)
    },
  },
}
</script>

<style>
.star {
  width: 30px;
  fill: yellow;
}
</style>
