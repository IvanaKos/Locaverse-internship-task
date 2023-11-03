<template>
  <div class="page">
    <MainHeader />
    <div class="description">
      <h2>"All Beginnings are Difficult" :)</h2>
      <p>
        The task was interesting and challenging for me since I have never
        worked with Vue or Nuxt before. The most difficult part was setting up
        the Nuxt project. This part took a lot of time. After trillions of error
        messages and rethinking a web developer career, it finally worked. But
        not for long. Another round of error messages, linting problems,
        Prettier failing... Then I couldn't commit because I had to set VS Code
        workspace to create new files in the LF line endings (this was not
        obvious and easy for me). Almost there, but then lost more than half an
        hour because I didn't know I should stop the process and run it again,
        after I created a new file. :)
      </p>
      <p>
        Finally, I managed to actually start working on the project. This was
        the fun part! I learned a lot, and enjoyed it very much. I understand
        how easy this task actually is, but every step required an effort in
        understanding how things work in Vue, Vuex and Nuxt. I am happy that I
        managed to complete it and it seems that it works. :)
      </p>
      <p>
        Looking forward to your review and suggestions, and especially the next
        tasks and projects.
      </p>
    </div>

    <div class="filter-container">
      <h2>M Cards Filter:</h2>
      <p v-if="$store.getters.filteredCardsStartingWithM.length === 0">
        No M cards at the moment! Go to Home page and add some!
      </p>
    </div>
    <div class="filtered-cards">
      <ServiceCard
        v-for="cardItem in $store.getters.filteredCardsStartingWithM"
        :key="cardItem.serviceName"
        :service="cardItem.serviceName"
        :business="cardItem.businessName"
        :rating-value="cardItem.rating"
      />
    </div>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  components: { ServiceCard },
}
</script>

<style>
.description {
  width: 60%;
  border: 1px solid hsl(206deg 14% 68%);
  border-radius: 5px;
  padding: 40px;
  max-height: 300px;
  overflow: scroll;
}

h2 {
  margin-bottom: 30px;
  font-size: 22px;
}

.filter-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;
}

.filtered-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  gap: 20px;
}

.filter-container p {
  text-decoration: underline;
  color: hsl(195deg 63% 48%);
}
</style>
