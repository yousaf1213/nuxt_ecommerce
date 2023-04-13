<template>
  <h1 class="text-center " >Check Out</h1>

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
    <td class="text-center"><button class="btn " id="btn" @click="decrement()" value=1><font-awesome-icon :icon="faMinus" /></button><input type="number" id="quantity" class="ml-2 mr-2 text-center" v-model="inputValue"   style="border:1px solid black ;width:40px" disabled><button @click="increment()"  class="btn1" id="btn" ><font-awesome-icon :icon="faPlus" /></button></td>
    <td><NuxtLink :to="{ path: '/transaction',query: { subtotal:products[0].price,data:JSON.stringify(products),quantity:inputValue , }}"><button class="btn2" @click="getValue">Purchase</button></NuxtLink></td>
  </tr>
  </table>
  <br>
  <h1 class="text-center " >Details</h1>

  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
         <li>
           <ul class="f-l">
            <li>Name</li>
            <li>Price</li>
            <li>Description </li>
            <li> Stock</li>
            <li>Vendor</li>
            <li>Contact No</li>
            <li>Email</li>
            
           </ul>
        </li>
      </ul>
      </div>
  <ul >    
    <li>{{products[0].product.product_name}}</li>
    <li>{{products[0].price}}</li>
    <li>{{products[0].product.product_desc}}</li>
    <li>{{products[0].stock}}</li>
    <li>{{products[0].vendor.name}}</li>
    <li>{{products[0].vendor.phone}}</li>
    <li>{{products[0].vendor.email}}</li>
    <li><img :src=" products[0].product.image " alt="Example image"></li>

  </ul>

</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faMinus ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const route = useRoute().params
console.log(route)
const { data: products } = await useFetch(`http://127.0.0.1:8000/product`, {params: {id: route.id,vendor: route.vendor}})



</script>

<script>
export default {
  data() {
    return {
      inputValue: 1,
      
    }
  },
  methods: {
    getValue() {
      const value = this.inputValue
      return {
      inputValue: value,
      
    }
    },
   increment() {
  this.inputValue++;
},
  decrement(index) {
    if(this.inputValue>1 )
    {
      this.inputValue--;
    }
  
},

},

  }
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