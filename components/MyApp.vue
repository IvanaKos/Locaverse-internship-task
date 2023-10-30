<template>
  <div class="my-app">
    <MyForm @card-values-updated="updateCardValues"></MyForm>
    <ServiceCard :service="serviceName" :business="businessName" />
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
      serviceName: '',
      businessName: '',
    }
  },

  methods: {
    // handleCardUpdate(value) {
    //   this.receivedValue.service = value
    // },
    updateCardValues(data) {
      this.serviceName = data.serviceName
      this.businessName = data.businessName
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
