<template>
	<div>
		<van-nav-bar
		  title="设置"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div>
			<van-cell to="/phone" title="登录密码" label="建议您定期更改密码以保护账户安全" center is-link />
			<van-cell to="/phone" title="手机验证" label="若您的手机已丢失或停用，请立即修改更换" center is-link />
			<van-cell to="/phone" title="支付密码" label="建议您定期更改密码" value="未设置" center is-link />
			<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
				
			</div>
			<van-cell to="/userspeak" title="用户反馈"  center is-link />
			<div style="background: rgb(245,245,245); width: 100%;height: 350px;">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			onClickLeft() {
			  // this.$toast('返回');
						this.$router.go(-1);
						
			},
			onClickRight() {
			  // this.$toast('按钮');
						// this.$router.push("/search")
			},
		}
	}
</script>

<style>
</style>
