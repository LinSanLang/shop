<template>
	<div style="position: relative; width: 100%;height: 667px; background: rgb(245,245,245);">
		<van-nav-bar
		  title="我的下级会员"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div>
			<div style="position: absolute; left: 0;right: 0;margin: auto;top: 220px; background-color: #DDD; width: 66px;height: 66px; border-radius: 50%; padding-top: 12px;">
				<img style="width: 40px;height: 40px;" src="img/order_w.png" alt="">
			</div>
			<div style="position: absolute; left: 0;right: 0;margin: auto;top: 300px;">
				您还没有相关的记录
			</div>
			<!-- <div style="background: rgb(245,245,245); width: 100%;height: 380px;">
				
			</div> -->
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

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
</style>
