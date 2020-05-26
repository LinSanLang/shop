<template>
	<div style="height: 650px; position: relative; background: rgb(245,245,245);">
		<van-nav-bar
		  title="手机验证"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div>
			<van-field
			  v-model="sms"
			  center
			  clearable
			  label="手机号"
			  placeholder="输入手机号"
			>
			  <!-- <van-button slot="button" size="small" type="primary">发送验证码</van-button> -->
			  <a style="text-decoration:underline" href="#" slot="button" >获取短信验证</a>
			</van-field>
			
			<van-field
			  v-model="sms"
			  center
			  clearable
			  label="验证码"
			  placeholder="请输入图形验证码"
			>
			  <img slot="button" style="width: 80px;height: 30px;" src="img/index.png" alt="">
			</van-field>
			
			<div style="background: rgb(245,245,245); width: 100%;height: 20px;">
				
			</div>
			
			<van-field
			  v-model="sms"
			  center
			  clearable
			  label="短信验证码"
			  placeholder="请输入短信验证码"
			>
			  <van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
			
			<div style="background: rgb(245,245,245); width: 100%;height: 20px;">
				
			</div>
			
			<div style="width: 80%; position: relative; left: 0;right: 0;margin: auto;">
				<van-button disabled type="primary" size="large">下一步</van-button>
			</div>
			
			<div>
				<img  src="img/PhoneBg.png" alt="">
			</div>
			
			
			<!-- <div style="background: rgb(245,245,245); width: 100%;height: 380px;">
				
			</div> -->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sms:""
			}
		},
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
		margin: 0;
		padding: 0;
	}
	a{
		color: #3BAEDA;;
	}
	a:active{
		color: #3BAEDA;
	}
	a:visited{
		color: #3BAEDA;
	}
</style>
