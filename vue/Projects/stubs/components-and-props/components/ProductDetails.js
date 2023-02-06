app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true 
        }
    },
    template: 
    /*html*/
    `
    <h2 style="text-align: center" v-for="detail in details">{{detail}}</h2>
    `

})