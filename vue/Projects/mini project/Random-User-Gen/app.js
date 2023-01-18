const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data(){
        return{
            firstName: 'John',
            lastName : 'doe',
            email: "jsdfkl@jsfdlk.com",
            gender: 'male',
            picture:"test"
        }
    }
})
app.mount('#app')