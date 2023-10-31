<template>
  <div class="form-container">
    <h1>Please Rate Our Service!</h1>
    <form id="form" class="rating-form" @submit.prevent="emitCardValues">
      <div class="input-unit">
        <input
          id="service-name"
          placeholder="Service-name"
          type="text"
          class="input-contact-info"
          autocomplete="name"
          required
          :value="serviceName"
          @input="updateServiceName"
        />
      </div>
      <div class="input-unit">
        <input
          id="business-name"
          placeholder="Business-name"
          type="text"
          class="input-contact-info"
          autocomplete="email"
          required
          :value="businessName"
          @input="updateBusinessName"
        />
      </div>
      <RatingStars ref="ratingStars" @rating-updated="updateRating" />

      <input type="submit" value="Submit" class="submit-btn" />
    </form>
  </div>
</template>

<script>
import RatingStars from '~/components/RatingStars.vue'

export default {
  components: {
    RatingStars,
  },

  data() {
    return {
      serviceName: '',
      businessName: '',
      rating: 0,
    }
  },

  methods: {
    updateServiceName(event) {
      this.serviceName = event.target.value
    },
    updateBusinessName(event) {
      this.businessName = event.target.value
    },
    updateRating(rating) {
      this.rating = rating
    },
    emitCardValues() {
      this.$emit('card-values-updated', {
        serviceName: this.serviceName,
        businessName: this.businessName,
        rating: this.rating,
      })
      this.serviceName = ''
      this.businessName = ''
      this.rating = 0
      this.$refs.ratingStars.resetRating()
    },
  },
}
</script>

<style>
.form-container {
  width: 50%;
  text-align: center;
}

h1 {
  margin-bottom: 50px;
}

.rating-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.input-unit {
  width: 100%;
}

input {
  color: hsl(198deg 39% 18%);
  border: 1px solid hsl(206deg 14% 68%);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

input::placeholder {
  color: hsl(206deg 14% 68%);
}

input:focus {
  outline-color: hsl(195deg 63% 48%);
}

.submit-btn {
  width: 200px;
  margin-top: 20px;
  color: hsl(0deg 0% 100%);
  background-color: hsl(195deg 63% 48%);
  transition: 0.4s;
}

.submit-btn:hover {
  box-shadow: 0 0 0 1px hsl(195deg 63% 48%);
  color: hsl(195deg 63% 48%);
  background-color: hsl(0deg 0% 100%);
  transform: scale(0.97);
}
</style>
