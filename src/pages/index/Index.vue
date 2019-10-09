<template>
    <div>
        <index-banner></index-banner>
        <index-search></index-search>
        <index-main></index-main>
    </div>
</template>

<script>
import IndexBanner from './components/Banner'
import IndexSearch from './components/Search'
import IndexMain from './components/Main'
export default {
    name:'Index',
    components:{
        IndexBanner,
        IndexSearch,
        IndexMain,
    }
}
</script>

<style>
    
</style>