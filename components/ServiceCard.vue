<template>
  <div class="service-card-wraper">
    <div class="service-card">
      <div class="service-img">
        <img src="../assets/img/locaverse-logo.jpg" alt="" />
      </div>
      <div class="service-info">
        <p class="service-name">{{ service || 'No service name' }}</p>
        <p class="business-name">{{ business || 'No business name' }}</p>
        <RatingResult :star-number="ratingValue" />
      </div>
    </div>
  </div>
</template>

<script>
import RatingResult from '~/components/RatingResult.vue'

export default {
  components: {
    RatingResult,
  },
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

<style>
.service-card-wraper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.service-card {
  width: 210px;
  height: 330px;
  border-radius: 5px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.service-img img {
  max-width: 100%;
}

.service-info {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  border: 1px solid hsl(206deg 14% 68%);
  border-radius: 0 0 5px 5px;
  text-align: left;
  overflow: hidden;
}

.service-name,
.business-name {
  line-height: 1;
}

.service-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.business-name {
  font-size: 1.1rem;
}
</style>
