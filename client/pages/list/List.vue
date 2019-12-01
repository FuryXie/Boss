<template>
    <div>
        <list-header></list-header>
        <list-main></list-main>
    </div>
</template>

<script>
import ListHeader from './components/Header'
import ListMain from './components/Main'
export default {
    name:'List',
    components:{
        ListHeader,
        ListMain
    }
}
</script>

<style>
    
</style>