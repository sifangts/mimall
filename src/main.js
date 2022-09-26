import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
// import env from './env'


//mock开关
const mock =false;
if(mock){
    require('./mock/api')
}
//根据前端的跨域方式做调整  如果 /a/b :/api/a/b => /a/b将/api自动去除
axios.defaults.baseURL='/api';
// axios.defaults.baseURL='https://www.fastmock.site/mock/05eb26ca38575595b2476807ca2412d4/api';
axios.defaults.timeout=8000;//请求超时时间
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL
//接口错误拦截
axios.interceptors.response.use(function(response){
    let res=response.data
    let path=location.hash;
    if(res.status==0){//请求成功
        return res.data;
    }else if(res.status==10){//未登录错误
        //未登录状态下刷新拉取数据时，判断当首页时不跳转到登录页面，在其他页面时跳转到登录页面
        if(path != '#/index'){
            window.location.href='/#/login'//跳转登陆页面
        }
		return Promise.reject(res);
    }else{
        alert(res.msg);
        return Promise.reject(res)
    }
})


Vue.use(VueAxios,axios);
Vue.use(VueCookie)
Vue.config.productionTip = false
Vue.use(VueLazyload,{
    loading:'/imgs/loading-svg/loading-bars.svg'
})

new Vue({
	store,
    router,
  render: h => h(App),

}).$mount('#app')
