<template>
  <div class="page">
    <MainHeader />
    <MyForm />
  </div>
</template>

<script>
import MyForm from '~/components/MyForm.vue'
import MainHeader from '~/components/MainHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    MainHeader,
    MyForm,
  },
}
</script>
