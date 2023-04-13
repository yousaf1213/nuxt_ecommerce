<template>
     <table>
  <tr>
    <th></th>
    <th>Product</th>
    <th>Price</th>
    <th>Vendor</th>
    <th>Vendor's Contact</th>
    <th>Stock Available</th>
    <th>Quantity Required</th>
    <th>Check Out</th>
  </tr>
  <tr>
    <td> <img :src=" products[0].product.image " alt="Example image" style="width:80px;height: 80px;"></td>
    <td>{{products[0].product.product_name}}</td>
    <td>{{products[0].price}}</td>
    <td>{{products[0].vendor.name}}</td>
    <td>{{products[0].vendor.phone}}</td>
    <td>{{products[0].stock}}</td>
    <td class="text-center"><button class="btn " id="btn" @click="inputValue++" value=1><font-awesome-icon :icon="faPlus" /></button><input type="number" id="quantity" class="ml-2 mr-2 text-center" v-model="inputValue"   style="border:1px solid black ;width:40px" disabled><button @click="inputValue--"  class="btn" id="btn" ><font-awesome-icon :icon="faMinus" /></button></td>
  <td><NuxtLink :to="`/transaction/${products[0].product.id}/${products[0].vendor.id}/${inputValue}`"><button class="btn" @click="getValue">Purchase</button></NuxtLink></td>
  </tr>
  </table>
  </template>




<script setup>
const route = useRoute().params
console.log(route)
const { data: products } = await useFetch(`http://127.0.0.1:8000/product`, {params: {id: route.id,vendor: route.vendor}})

</script>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [],
        showCart: false
      };
    },
    computed: {
      cartItemCount() {
        return this.cartItems;
      }
    },
    methods: {
      addToCart() {
        const item = { id: 1, name: "Product Name", price: 19.99 };
        this.cartItems.push(item);
      }
    }
  };
  </script>
  