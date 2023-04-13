<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Ecomemrce Website</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products/ecommerce/"   >Products</NuxtLink></li>
          <NuxtLink to="/cart/cartcehck/"><ShoppingCartIcon  class="h-8 w-8 text-blue-500"/></NuxtLink>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot/>
    </div>
  </div>
</template>
<script setup>

import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

</script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>