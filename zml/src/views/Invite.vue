<template>
	<div>
		<van-nav-bar
		  title="邀请返利"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div>
			<van-cell to="/youinvite" title="邀请返利记录" label="下级会员确认收货后您即可获得返利" center is-link />
			<van-cell to="/youinvite1" title="查看下级会员" label="通过您邀请的链接注册的会员" center is-link />
			<van-cell title="邀请好友赚返利" label="快来邀请朋友注册商城赚返利" value="未设置" center is-link />
			<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
				
			</div>
			<div style="background: rgb(245,245,245); width: 100%;height: 380px;">
				
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
