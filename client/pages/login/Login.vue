<template>
    <div>
        <login-title></login-title>
        <login-main></login-main>
    </div>
</template>

<script>
import LoginTitle from './components/Title'
import LoginMain from './components/Main'
export default {
    name:'Login',
    components:{
        LoginTitle,
        LoginMain
    }
}
</script>

<style>
    
</style>