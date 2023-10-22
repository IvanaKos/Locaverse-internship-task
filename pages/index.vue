<template>
  <div>
    <NuxtLink to="/experience">Experience</NuxtLink>
    <p>Hello!</p>
    <MyForm />
  </div>
</template>

<script>
import MyForm from '~/components/MyForm.vue'

export default {
  name: 'IndexPage',
  components: {
    MyForm,
  },
}
</script>
<style>
div {
  background-color: red;
}
</style>
