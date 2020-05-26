<template>
	<div style="position: relative;">
		<div class="leftTop">
			
		</div>
		<div>
			<van-nav-bar
			  title="活动"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			>
			  <van-icon name="ellipsis" slot="right" />
			</van-nav-bar>
		</div>
		<div class="bao">
			拆红包
		</div>
		<img style="width: 100%;" src="img/red_packet.png" alt="">
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
	.bao{
		left: 0;right: 0;
		top: 320px;
		margin: auto;
		position: absolute; 
		font-size: 30px;
		color: #fff;
		width: 186px;
		height: 70px;
		text-align: center;
		line-height: 70px;
		background-color: #FA9E3B;
		color: #fff;
		box-sizing: border-box;
		border-radius: 18px;
	}
</style>
