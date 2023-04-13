// store/cart.js

export const state = () => ({
    items: []
  })
  
  export const getters = {
    cartItemCount: (state) => {
      return state.items.length
    }
  }
  
  export const mutations = {
    addItem(state, item) {
      state.items.push(item)
    },
    removeItem(state, item) {
      const index = state.items.indexOf(item)
      state.items.splice(index, 1)
    }
  }
  