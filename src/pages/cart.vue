<template>
            <!-- 购物车 -->
	<div>
        <order-header></order-header>
          Cart
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
	export default {
  components: { OrderHeader, NavFooter },
		name:'Cart'
	}
</script>

<style lang="scss" scoped>

</style>