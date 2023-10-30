<template>
  <div class="page">
    <MainHeader />
    <MyApp />
  </div>
</template>

<script>
import MyApp from '~/components/MyApp.vue'
import MainHeader from '~/components/MainHeader.vue'

export default {
  name: 'IndexPage',
  components: {
    MainHeader,
    MyApp,
  },
}
</script>
