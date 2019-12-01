<template>
    <div>
        <detail-search></detail-search>
        <detail-main></detail-main>
    </div>
</template>

<script>
import DetailSearch from './components/Search'
import DetailMain from './components/Main'
export default {
    name:'Detail',
    components:{
        DetailSearch,
        DetailMain

    }
}
</script>

<style>
    
</style>