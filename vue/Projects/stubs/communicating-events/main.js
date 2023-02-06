const app = Vue.createApp({
   data() {
     return {
       cart: [],
     }
   },
   methods: {
     updateCart(id) {
      this.cart.push(id)
     },
     removeFromCart(id){
      var index = this.cart.indexOf(id);
      if (index != -1){
         this.cart.splice(index,1);
      }
     }
   }
 })