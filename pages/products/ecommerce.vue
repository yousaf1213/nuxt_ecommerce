<template>
    <div class="grid-container">
    <div class="mb-3" v-for="(item) in products" :key="item.id">
    

  <div class="grid-item">    
    <div class="card" style="width: 18rem; border: 1px solid black; border-radius: 5px;">
  <img :src="item.product.image" class="card-img-top" alt="..." style="height:200px; width: 100%;"><hr>
  <div class="card-body">
    <h5 class="card-title mt-2 mb-2">{{item.product.product_name}}</h5><hr>
    <h5 class="card-title mt-2 mb-2">{{item.vendor.name}}</h5><hr>
    <h5 class="card-title mt-2 mb-2">{{item.vendor.phone}}</h5><hr>
    <p class="card-text mt-2 mb-2">{{item.price}}</p><hr>
    <div class="row">
        <div class="col3">
    <NuxtLink :to="`/products/${ item.product.id }/${item.vendor.id}`"><button class="btn btn-primary mt-2 mb-1 ml-1" style="width:40%" > Purchase </button></NuxtLink>
    <!-- <NuxtLink :to="`/products/${ item.id }`"> -->
      <button  class="btn2 btn-secondary mt-2 mb-1 mr-1 float-right" style="width:40%" @click="addToCart(item.product.product_name,item.vendor.name,item.vendor.phone,item.price,item.product.id,item.vendor.id,item.product.image)"> Add to Cart </button>
    <!-- </NuxtLink> -->

        </div>

        

    </div>
  </div>
</div>
</div>

        


</div>
</div>

   
   </template>
   
    
    <script setup>
    const{data:products}=await useFetch('http://127.0.0.1:8000/holderlist')
    </script>


<script>
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.cartItems.length;
    }
  },
  created() {
    if (typeof localStorage !== 'undefined') {
    // Retrieve cart data from localStorage
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      this.cartItems = JSON.parse(cartData);
    }
  }
},
  methods: {
    addToCart(prod,vendor,vendor_contact,price,item_id,vendor_id,image) {
      const item = { id: item_id, name: prod, price: price,vendor:vendor,vendor_id:vendor_id,contact:vendor_contact,image:image};
      this.cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.$toast.success("Product Succcessfully added to the cart", {  onAfterHide: function() {
    window.location.href = "http://localhost:3000/products/ecommerce/";
  }});
    }
  }
};
</script>


    
    <style scoped>
    .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  padding: 20px;
}

    </style>