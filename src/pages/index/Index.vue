<template>
    <div>
        <index-topbar></index-topbar>
        <index-banner></index-banner>
        <index-search></index-search>
        <index-main></index-main>
        <index-bar></index-bar>
    </div>
</template>

<script>
import IndexTopbar from './components/Topbar'
import IndexBanner from './components/Banner'
import IndexSearch from './components/Search'
import IndexMain from './components/Main'
import IndexBar from './components/Bar'
export default {
    name:'Index',
    components:{
        IndexTopbar,
        IndexBanner,
        IndexSearch,
        IndexMain,
        IndexBar
    }
}
</script>

<style>
    
</style>