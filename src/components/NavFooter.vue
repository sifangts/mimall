<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/sifangts" target="_blank">四方团扇主页<span>|</span></a>
            <a href="https://github.com/sifangts" target="_blank">Vue全栈课程<span>|</span></a>
            <a href="https://github.com/sifangts" target="_blank">React全家桶课程<span>|</span></a>
            <a href="https://github.com/sifangts" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
        </div>
        <div class="copyright">Copyright <span class="domain">© mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
    </div>
</template>

<script>
    export default {
        name:'nav-footer'
    }
</script>

<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color:#333;
        color: #999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
				width: 53px;
				height: 36px;
				margin-bottom: 13px;
			}
        }
		.footer-link{
			margin-bottom: 10px;
			a{
				color: #999;
				display: inline-block;
			}
			span{
				margin: 0 10px;
			}
		}
		.copyright{
			.domain{
				color: #FF6600;
			}
		}
    }
</style>