<template>
  <div class="d-flex justify-content-center">
   <section class="gradient-custom" style="max-width: 50%;">
  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center py-5">
      <div class="col-md-7 col-lg-5 col-xl-4">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-4">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px" />
            <form @submit.prevent="submitForm">
              <div class="d-flex justify-content-between align-items-center mb-3" >
                <div class="form-outline">
                    <label class="form-label" for="card">Card Number:</label> &nbsp;
                  <input type="text" v-model="card" class="form-control form-control-lg" size="17"
                    placeholder="1234 5678 9012 3457" minlength="16" maxlength="16" />
                 
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-outline">
                  <label class="form-label " for="month">Expire Month</label>&nbsp;
                  <input type="number" v-model="month" class="form-control form-control-lg" 
                    placeholder="00" minlength="1" maxlength="2"/>
                </div>
              </div>


              <div class="d-flex justify-content-between align-items-center pb-2">
                <div class="form-outline">
                  <label class="form-label" for="year">Expire Year:</label>&nbsp;

                  <input type="number " v-model="year" class="form-control form-control-lg" placeholder="2000"
                    minlength="4" maxlength="4" />
                </div>
                <div class="form-outline">
                  <label class="form-label" for="cvv">Cvv:</label>&nbsp;

                  <input type="password" v-model="cvv" class="form-control form-control-lg"
                    placeholder="111" size="1" minlength="3" maxlength="3" />
                </div>
                <button type="submit" class="btn " style="width:200px ">PKR:     {{ $route.query.subtotal }} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</template>

<script setup>
      const route = useRoute().query
      console.log(route)
      const items= JSON.parse(route.data)



</script>



<script>
import axios from 'axios'


export default {
data() {
  return {
    card: '',
    month: '',
    year: '',
    cvv: '',
  }
},
methods: {
  async submitForm()  {
    try {
      const route = useRoute().query
      console.log(route)
      const pv_id=[]
      const lis=JSON.parse(route.data)
      for(let i=0;i<JSON.parse(route.data).length;i++)
      {         
        if(lis.length>1)
        {
        pv_id.push({pid:lis[i].id,vid:lis[i].vendor_id,quantity:route.quantity[i] ?? 1})
        }
        else if(lis.length=1){
          pv_id.push({pid:lis[i].product.id,vid:lis[i].vendor.id,quantity:route.quantity ?? 1})
        }

      }
      const response =  await axios.post('http://127.0.0.1:8000/order/',  {pv_id:pv_id,uid:1 ,card_no:this.card,exp_month:this.month,exp_year:this.year,cvc:this.cvv })
      this.$toast.success(response.data, {  duration: 10});
      setTimeout(() => {
  window.location.href = "http://localhost:3000/products/ecommerce/";
}, 1000);
      localStorage.clear('cartItems')
      // this.lis.splice(0, this.lis.length);

    } catch (error) {
      console.error(error)
    }
  }
}
}

</script>









<style>
.gradient-custom {
background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
  linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
  linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
  radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
  radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
background-blend-mode: screen, color-dodge, overlay, difference, normal;


}
input{
  border: 1px solid black;
  border-radius: 3px;
}

.form-control {
    display: flex;
    flex-wrap: wrap;
  }
  .form-control {
    margin-right: 10px;
  }
  .form-label,.form-control{
      margin-right: 10px;
    margin-bottom: 10px;
   
  }

  @media (max-width: 768px) {
  .gradient-custom {
    max-width: 100%;
  }
}


</style>