<template>
    <div>
      <h1>Products</h1>
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 9.99,
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 19.99,
          },
          {
            id: 3,
            name: 'Product 3',
            description: 'Product 3 description',
            price: 29.99,
          },
        ],
      }
    },
    methods: {
      ...mapActions('cart', ['addToCart']),
    },
  }
  </script>
  