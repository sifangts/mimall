<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>

// import storage from './storage/index';
export default {
  name: 'App',
  data(){
    return {
        
    }
  },
  mounted(){
      this.getUser();
      this.getCartCount()
  },
  methods:{
    //获取用户信息
    getUser(){
        //to-do保存到vuex里面
        this.axios.get('/user').then((res)=>{
			this.$store.dispatch('saveUserName',res.username);
        })
    },
    //获取购物车的数量
    getCartCount(){
        //to-do保存到vuex里面
        this.axios.get('/carts/products/sum').then((res)=>{
            this.$store.dispatch('saveCartCount',res)
        })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';


</style>
