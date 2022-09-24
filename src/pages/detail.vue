<template>
                <!-- 产品详情页 -->
	<div class="detail">
        <ProductParam title="红米Note 7"></ProductParam>
		<div class="wrapper">
            <div class="container clearfix">
				<div class="swiper">
					<swiper :options="swiperOption">
						<swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
						<swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
						<swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
						<swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
						<!-- Optional controls -->
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import ProductParam from '../components/ProductParam.vue';
	export default {
    name: "Detail",
    components: { swiper,swiperSlide,ProductParam },
	data(){
		return{
			swiperOption:{
				autoplay:true,
				pagination:{
                        el:'.swiper-pagination',
                        clickable:true,
                    }
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/base.scss';
.detail{
	.wrapper{
        .swiper{
			float: left;
			width: 642px;
			height: 617px;
			margin-top: 5px;
			img{
				width: 100%;
				// height: 100%;
			}
		}
	} 
}
</style>
