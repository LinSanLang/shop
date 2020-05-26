<template>
	<div>
		<van-nav-bar
		  title="帮助"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div>
			<img style="width: 100%;" src="img/help.png" alt="">
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

<style>
</style>
