/**
 * 商城Vuex-mutations
 */

export default{
	saveUserName(state,username){
        state.username=username
	},
	saveCartCount(state,count){
		console.log(count)
        state.cartCount=count
	}
}