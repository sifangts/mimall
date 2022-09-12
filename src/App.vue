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
		res:{}
	}
  },
  mounted(){
	// storage.setItem('a',1)//添加user同级下的a
	// storage.setItem('user',{a:1})//user下添加a
	// storage.setItem('abc',{a:1},'user')
	// storage.clear('a')//删除user同级下的a
	// storage.clear('a','user')//删除user下的a
	
	//本地加载请求静态json文件的形式
	// this.axios.get('/mock/user/login.json').then((res)=>{
	// 	this.res=res
	// })

	//通过fast-mock平台实现数据mock
	// this.axios.get('/mock/user/login').then((res)=>{
	// 	this.res=res
	// })
	//本地集成mockjs实现数据mock
	this.axios.get('/user/login').then((res)=>{
		this.res=res
	})
  }
}
</script>

<style>

</style>
