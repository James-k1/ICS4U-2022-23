const app = Vue.createApp({
   data() {
      return {
         selectedVar: 0,
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity : 50, onSale : false },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity : 50, onSale : true },
         ]
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateVariant(index){
         this.selectedVar=index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {

         return this.variants[this.selectedVar].image
      },
      inStock (){ // 0 is false.
         return this.variants[this.selectedVar].quantity

      },
      onSale() {
         return this.variants[this.selectedVar].onSale ? 'On Sale' : ""
      }
   }
})