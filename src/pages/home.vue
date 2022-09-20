<template>
                <!-- 首页 -->
	<div class="home">
        <nav-header></nav-header>
        <router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import NavHeader from '../components/NavHeader.vue'
	export default {
  components: { NavFooter, NavHeader },
	name:'Home'	
	}
</script>

<style lang="scss" scoped>
    
</style>