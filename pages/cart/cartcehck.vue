<template>
<table>
  <tr>
    
    <th>Product</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Vendor</th>
    <th>Quantity Required</th>
    <th>Unit Price</th>
    <th>Remove Item</th>
  </tr>
  
  <tr  v-for="(item,index) in cartItems" :key="index">
    
    <td><img :src="item.image" alt="Example image" style="width:80px;height: 80px;"></td>
    <td>{{ item.name }}</td>
    <td> {{ item.price }}</td>
    <td>  {{ item.vendor }}</td>
    <td class="text-center"><button class="btn " @click="decrement(index,item)" ><font-awesome-icon :icon="faMinus" /></button><input type="number" id="quantity" class="ml-2 mr-2 text-center" :value="count[index]"   style="border:1px solid black ;width:40px" disabled><button @click="increment(index)"  class="btn1" id="btn" ><font-awesome-icon :icon="faPlus" /></button></td>
    <td> {{ item.price *count[index] }}</td>
    <td><button class="btn mx-8 " @click="deleteItem(index)" ><font-awesome-icon :icon="faTrashAlt" /></button></td>
  </tr>
  <tr>
    <th>Total Products</th>
    <th colspan="3" >{{ cartItemCount }}</th>
    <th> Total Price</th>
    <th>{{ totalAmount }}</th>
    <td><NuxtLink :to="{ path: '/transaction',query: { subtotal:totalAmount,data:JSON.stringify(cartItems),quantity:count }}"><button class="btn2" @click="getValue">Purchase</button></NuxtLink></td><th> </th>
    {{ item }}
    </tr>
  <tr>
  </tr>
  
</table>





</template>





<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faMinus,faTrashAlt } from '@fortawesome/free-solid-svg-icons'




export default {
  
  props:['FontAwesomeIcon'],
  data() {
    return {
      product_holder_list:[],
      cartItemCount: 0,
      cartItems:[],
      count:[],
      totalAmount:0,
    }
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce(
        (total, item, index) => total + item.price * this.count[index],
        0
      );
    },
  },
  
  created() {

    if (typeof localStorage !== 'undefined') {
      const cartData = localStorage.getItem('cartItems');
      var newData=[]
      const getter=JSON.parse(cartData)
      if(getter.length>=1){
       newData = getter.map(item => {
  return {
    ...item,
    quantity: 1
  }
})
      }

    

      if (newData) {
       
        this.cartItems = newData
        console.log("new Data",newData)
        this.cartItemCount=newData.length
        for(let i=0;i<newData.length;i++){
          if(newData.length>=1)
          {
            this.count = this.cartItems?.map(() => (newData[i].quantity));       
          }
      }

    }
    }
  },  
  methods:{
   increment(index,b) {

  this.count[index]++;
},
  decrement(index) {
    if(this.count[index]>1 )
    {
      this.count[index]--;
    }
  
},
deleteItem(index) {
    const storedData = localStorage.getItem("cartItems");
    let parsedData = [];

    if (storedData) {
      parsedData = JSON.parse(storedData);
    }

    parsedData.splice(index, 1);

    const updatedData = JSON.stringify(parsedData);

    localStorage.setItem("cartItems", updatedData);
    this.cartItems.splice(index, 1);
    this.$toast.error("Product removed Successfully ")
  }
}
}
</script>

<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faPlus, faMinus,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
</script>


<style scoped>

li{
  border: 1px solid black;
  
}

.f-l{
  float:left;
  font-weight: bold;
}
hr{
  color: black; 
}
table, th, td {
  border:1px solid black;
}


</style>