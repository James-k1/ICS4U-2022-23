<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" class="input">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="texts" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>
<script>
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
    setup(){
        const username = ref('')
        const password = ref('')
        const login = ()=>{
            
            //Check Auth With Database
            console.log(username)
            console.log(password)
        }
        return {username,password,login}
    }
} 
</script>