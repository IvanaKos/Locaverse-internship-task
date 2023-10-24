<template>
  <div class="form-container">
    <h1>Please Rate Our Service!</h1>
    <form id="form" class="rating-form" @submit.prevent="submitForm">
      <div class="input-unit">
        <input
          id="service-name"
          v-model="serviceName"
          placeholder="Service-name"
          type="text"
          class="input-contact-info"
          autocomplete="name"
          required
        />
        <p></p>
      </div>
      <div class="input-unit">
        <input
          id="business-name"
          v-model="businessName"
          placeholder="Business-name"
          type="text"
          class="input-contact-info"
          autocomplete="email"
          required
        />
        <p></p>
      </div>
      <RatingStars v-model="ratingStars" />

      <input type="submit" value="Submit" class="submit-btn" />
    </form>
    <ServiceCard
      v-if="formSubmitted"
      :service="submittedServiceName"
      :business="submittedBusinessName"
      :rating="submittedRatingStars"
    />
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  components: {
    ServiceCard,
  },

  data() {
    return {
      serviceName: '',
      businessName: '',
      submittedServiceName: '',
      submittedBusinessName: '',
      submittedRatingStars: 0,
      formSubmitted: false,
    }
  },

  computed: {
    ratingStars: {
      get() {
        return this.submittedRatingStars
      },
      set(value) {
        this.submittedRatingStars = value
      },
    },
  },

  methods: {
    submitForm() {
      this.submittedServiceName = this.serviceName
      this.submittedBusinessName = this.businessName
      this.submittedRatingStars = this.ratingStars
      this.formSubmitted = true
    },
  },
}
</script>

<style>
.form-container {
  width: 40%;
  text-align: center;
}

h1 {
  margin-bottom: 50px;
}

.rating-form {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 50px;
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
