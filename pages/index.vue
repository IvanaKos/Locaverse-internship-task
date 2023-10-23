<template>
  <div class="page">
    <MainHeader />
    <MyForm />
    <ServiceCard />
  </div>
</template>

<script>
import MyForm from '~/components/MyForm.vue'
import MainHeader from '~/components/MainHeader.vue'
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  name: 'IndexPage',
  components: {
    MainHeader,
    MyForm,
    ServiceCard,
  },
}
</script>
