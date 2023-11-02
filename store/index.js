export const state = () => ({
  cardItems: [],
  filteredCardItems: [],
})

// export const getters = {
//   getCounter(state) {
//     return state.counter
//   },
// }

export const mutations = {
  updateCardItems(state, data) {
    state.cardItems.push(data)
  },

  filterCardItems(state) {
    state.filteredCardItems = getters.filteredCardsStartingWithM(state)
  },
}

export const getters = {
  filteredCardsStartingWithM: (state) => {
    return state.cardItems.filter((item) =>
      item.serviceName.toLowerCase().startsWith('m')
    )
  },
}

// state.cardItems.filter((item) =>
//       item.serviceName.startsWith('m')
//     )
