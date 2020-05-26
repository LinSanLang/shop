<template>
	<div>
		<van-nav-bar
		  title="用户反馈"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		
		<div >
			<van-cell-group>
			  <van-field
			    v-model="message"
			    rows="1"
			    autosize
			    label="反馈"
			    type="textarea"
			    placeholder="请描述一下您遇到的问题"
			  />
			</van-cell-group>
			<van-button type="primary" @click="showPopup">提交</van-button>
			<div id="user">
				<van-popup class="you" v-model="show">{{showText}}</van-popup>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message:"",
				show: false,
				showText:""
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
			 showPopup() {
			      this.show = true;
				  if(this.message.length==0){
					  this.showText="请输入要反馈内容"
				  }
				  else{
					  this.showText="反馈成功"
					  this.message=""
				  }
			    }
		}
	}
</script>


<style lang="less">
	#user{
		.van-popup--center{
			height: 100px;
			width: 200px;
			text-align: center;
			line-height: 100px;
		}
		.van-popup{
			height: 100px;
			width: 200px;
			text-align: center;
			line-height: 100px;
		}
	}
</style>

