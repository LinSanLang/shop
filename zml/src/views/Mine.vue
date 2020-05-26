<template>
	<div class="mine">
		
		<div class="loginShow" v-if="flag==2">
			<van-nav-bar
			  title="登录"
			  right-text="注册"
			  left-arrow
			  @click-left="onClickLeft1"
			  @click-right="onClickRight1"
			>
			<van-icon name="img/home_b.png" slot="left" size="16" />
			</van-nav-bar>
			<div>
				<div>
					<van-cell-group>
					  <van-field
					    v-model="loginUsername"
					    clearable
					    label="用户名"
					    placeholder="请输入用户名"
					  />
					
					  <van-field
					    v-model="loginPassword"
					    type="password"
					    label="密码"
					    placeholder="请输入密码"
					  />
					</van-cell-group>
					<van-button type="info" @click="login">登录</van-button>
				</div>
			</div>
		</div>
		
		<div class="registered" v-if="flag==4">
			<van-nav-bar
			  title="注册"
			  right-text="登录"
			  left-arrow
			  @click-left="onClickLeft1"
			  @click-right="onClickRight2"
			>
			<van-icon name="img/home_b.png" slot="left" size="16" />
			</van-nav-bar>
			<div>
				<van-cell-group>
				  <van-field
				    v-model="username"
				    clearable
				    label="用户名"
				    placeholder="请输入用户名"
				  />
				
				  <van-field
				    v-model="password"
				    type="password"
				    label="密码"
				    placeholder="请输入密码"
				  />
				</van-cell-group>
				
				<van-field
				    v-model="password2"
				    type="password"
				    label="确认密码"
				    placeholder="请再次输入密码"
				  />
				</van-cell-group>
				
				<van-field
				    v-model="email"
				    type="email"
				    label="邮箱"
				    placeholder="请输入邮箱"
				  />
				</van-cell-group>
				
				<van-button type="info" @click="regist">注册</van-button>
			</div>
		</div>
		
		<div style="position: relative;" v-if="flag==1">
			<div style="height: 240px; width: 100%; background: #00A8E6; position: relative;" >
				<!-- 设置图标 -->
				<van-icon class="set" name="setting-o" color="white" size="25" />
				<!-- 更多图标 -->
				<van-icon class="lot" name="ellipsis" color="white" size="25" />
				<div class="mePhoto">
					<!-- 头像 -->
					<img style="width: 60px;height: 60px; margin-top: 10px;" src="img/member_w.png" alt="">
				</div>
				<div class="name" @click="goLogin" >点击登录</div>
				<div class="topFoot">
					<div class="shop1">
						<img src="img/favorite_w.png" alt="">
						<div>商品收藏</div>
					</div>
					<div class="shop2">
						<img src="img/store_w.png" alt="">
						<div>店铺收藏</div>
					</div>
					<div class="shop3">
						<img src="img/goods-browse_w.png" alt="">
						<div>我的足迹</div>
					</div>
				</div>
			</div>
			<!-- 分割用 -->
			<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
				
			</div>
			
			<div class="body">
				<!-- 我的订单 -->
				<div>
					<van-cell value="查看全部订单" is-link title="我的订单" icon="img/mc_01.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
					<div class="sample">
						<div>
							<img src="img/mcc_01.png" alt="">
							<div>待付款</div>
						</div>
						<div>
							<img src="img/mcc_02.png" alt="">
							<div>待收货</div>
						</div>
						<div>
							<img src="img/mcc_03.png" alt="">
							<div>待自提</div>
						</div>
						<div>
							<img src="img/mcc_04.png" alt="">
							<div>待评价</div>
						</div>
						<div>
							<img src="img/mcc_05.png" alt="">
							<div>退款/退货</div>
						</div>
					</div>
				</div>
				<!-- 分割用 -->
				<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
					
				</div>
				<!-- 我的资产 -->
				<div>
					<van-cell value="查看全部财产" is-link title="我的资产" icon="img/mc_02.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
					<div class="sample">
						<div>
							<img src="img/mcc_06_b.png" alt="">
							<div>预存款</div>
						</div>
						<div>
							<img src="img/mcc_07_b.png" alt="">
							<div>充值卡</div>
						</div>
						<div>
							<img src="img/mcc_08_b.png" alt="">
							<div>代金券</div>
						</div>
						<div>
							<img src="img/mcc_09_b.png" alt="">
							<div>红包</div>
						</div>
						<div>
							<img src="img/mcc_10_b.png" alt="">
							<div>积分</div>
						</div>
					</div>
				</div>
				<!-- 分割用 -->
				<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
					
				</div>
				
				<div>
					<van-cell  is-link title="收获地址管理" icon="img/mc_03.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
					<van-cell  is-link title="用户设置" icon="img/mc_04.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
				</div>
				<!-- 分割用 -->
				<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
					
				</div>
				<van-cell  is-link title="邀请返利" icon="img/mc_01.png">
				  <!-- 使用 title 插槽来自定义标题 -->
				  <template slot="title">
				  </template>
				</van-cell>
				<!-- 分割用 -->
				<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
					
				</div>
				<van-cell  is-link title="帮助" icon="img/help_1.png">
				  <!-- 使用 title 插槽来自定义标题 -->
				  <template slot="title">
				  </template>
				</van-cell>
			</div>
		</div>
		
		
		<div v-if="flag==3">
			<div v-if="userInfo">
				<div style="height: 240px; width: 100%; background: #00A8E6; position: relative;" >
					<!-- 设置图标 -->
					<van-icon class="set" name="setting-o" color="white" size="25" />
					<!-- 更多图标 -->
					<van-icon class="lot" name="ellipsis" color="white" size="25" />
					<div class="mePhoto">
						<!-- 头像 -->
						<img style="width: 60px;height: 60px; margin-top: 10px;" src="img/member_w.png" alt="">
					</div>
					<!-- <div class="name" >{{userInfo.M_UserName}}</div> -->
					<div class="name" >林三浪</div>
					<div class="topFoot">
						<div class="shop1">
							<img src="img/favorite_w.png" alt="">
							<div>商品收藏</div>
						</div>
						<div class="shop2">
							<img src="img/store_w.png" alt="">
							<div>店铺收藏</div>
						</div>
						<div class="shop3">
							<img src="img/goods-browse_w.png" alt="">
							<div>我的足迹</div>
						</div>
					</div>
				</div>
				<!-- 分割用 -->
				<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
					
				</div>
				
				<div class="body">
					<!-- 我的订单 -->
					<div>
						<van-cell value="查看全部订单" is-link title="我的订单" icon="img/mc_01.png">
						  <!-- 使用 title 插槽来自定义标题 -->
						  <template slot="title">
						  </template>
						</van-cell>
						<div class="sample">
							<div>
								<img src="img/mcc_01.png" alt="">
								<div>待付款</div>
							</div>
							<div>
								<img src="img/mcc_02.png" alt="">
								<div>待收货</div>
							</div>
							<div>
								<img src="img/mcc_03.png" alt="">
								<div>待自提</div>
							</div>
							<div>
								<img src="img/mcc_04.png" alt="">
								<div>待评价</div>
							</div>
							<div>
								<img src="img/mcc_05.png" alt="">
								<div>退款/退货</div>
							</div>
						</div>
					</div>
					<!-- 分割用 -->
					<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
						
					</div>
					<!-- 我的资产 -->
					<div>
						<van-cell value="查看全部财产" is-link title="我的资产" icon="img/mc_02.png">
						  <!-- 使用 title 插槽来自定义标题 -->
						  <template slot="title">
						  </template>
						</van-cell>
						<div class="sample">
							<div>
								<img src="img/mcc_06_b.png" alt="">
								<div>预存款</div>
							</div>
							<div>
								<img src="img/mcc_07_b.png" alt="">
								<div>充值卡</div>
							</div>
							<div>
								<img src="img/mcc_08_b.png" alt="">
								<div>代金券</div>
							</div>
							<div>
								<img src="img/mcc_09_b.png" alt="">
								<div>红包</div>
							</div>
							<div>
								<img src="img/mcc_10_b.png" alt="">
								<div>积分</div>
							</div>
						</div>
					</div>
					<!-- 分割用 -->
					<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
						
					</div>
					
					<div >
						<div @click="goAdress">
							<van-cell  is-link title="收获地址管理" icon="img/mc_03.png">
							  <!-- 使用 title 插槽来自定义标题 -->
							  <template slot="title">
							  </template>
							</van-cell>
						</div>
						<div @click="goSet">
							<van-cell  is-link title="用户设置" icon="img/mc_04.png">
							  <!-- 使用 title 插槽来自定义标题 -->
							  <template slot="title">
							  </template>
							</van-cell>
						</div>
						
					</div>
					<!-- 分割用 -->
					<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
						
					</div>
					<van-cell to="/invite" is-link title="邀请返利" icon="img/mc_01.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
					
					<!-- 分割用 -->
					<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
						
					</div>
					<van-cell to="/help" is-link title="帮助" icon="img/help_1.png">
					  <!-- 使用 title 插槽来自定义标题 -->
					  <template slot="title">
					  </template>
					</van-cell>
					
					<!-- 分割用 -->
					<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
						
					</div>
					<div @click="loginOut">
						<van-cell  is-link title="注销" icon="img/zhuxiao.png">
						  <!-- 使用 title 插槽来自定义标题 -->
						  <template slot="title">
						  </template>
						</van-cell>
					</div>
				</div>
			</div>
		</div>
		

		
		<br>
		<br>
		<br>

		
	</div>
</template>

<script>
	import Cookie from 'js-cookie'
	export default{
		data(){
			return{
				username:"",
				password:"",
				password2:"",
				email:"",
				loginUsername:"",
				loginPassword:"",
				userInfo:null,
				active:0,
				flag: localStorage.getItem('flag')||1,
				isloged:localStorage.getItem('login')
				
			}
		},
		created() {
			this.grtUserInfo()
		},
		computed:{
			
			getFlag(){
				let flag1=localStorage.getItem('flag')
				if(flag1.length!=0){
					return flag1
				}
				else{
					return 1
				}
				
			}
		},
		methods:{
			goSet(){
				this.$router.push("/set");
			},
			goAdress(){
				this.$router.push("/meadress");
			},
			login1(){
				// 添加数据
				localStorage.setItem("login",true);
				console.log(this.$route.query.t);
				if(this.$route.query.t)
				{
					this.$router.push(this.$route.query.t);
				}
				else{
					this.$router.push("/");
				}
			},
			logout1(){
				// 删除数据
				localStorage.removeItem("login");
				this.$router.push("/");
			},
			onClickLeft1() {
			  this.$router.push('/')
			  // this.flag=1
			  localStorage.setItem("flag",1);
			},
			onClickRight1() {
			  // this.$toast('按钮');
			  this.flag=4
			  localStorage.setItem("flag",4);
			},
			onClickRight2() {
			  // this.$toast('按钮');
			  this.flag=2
			  localStorage.setItem("flag",2);
			}, 
			goLogin(){
				this.flag=2
				localStorage.setItem("flag",2);
			},
			loginOut(){
				// this.$http({
				// 	url:`http://www.520mg.com/member/index_login.php?dopost=exit`,
				// 	methods:"get",
				// 	withCredentials:true
				// }).then(res=>{
				// 	if(res.data.status==1){
						this.$toast("退出登录成功")
						localStorage.removeItem("login");
						// this.userInfo=null
						this.flag=1
						localStorage.setItem("flag",1);
					// }
					// else{
					// 	this.$toast("退出登录失败")
					// }
				// })
			},
			grtUserInfo(){
				// this.$http({
				// 	url:`http://www.520mg.com/member/ajax_login.php`,
				// 	method:"get",
				// 	// 强制上传cookie信息
				// 	withCredentials:true
				// }).then(res=>{
				// 	console.log(res.data)
				// 	this.userInfo=res.data
				// })
				this.userInfo={
					na:"sdad"
				}
			},
			regist(){
				if(this.username.length<=0||this.password.length<=0||this.email.length<=0||this.password2.length<=0){
					this.$toast("必填项不能为空")
				}
				else if(this.password!=this.password2){
					this.$toast("两次密码不一致")
				}
				else{
					// this.$http({
					// 	url:`http://www.520mg.com/member/reg_new2.php?userid=${this.username}&userpwd=${this.password}&email=${this.email}`,
					// 	method:"post"
					// }).then(res=>{
						// if(res.data.status==1){
							this.$toast("注册成功")
						// }
						// else{
							// this.$toast(res.data.msg)
						// }
					// }).catch(err=>{
						// console.log("请求出错",err)
					// })
				}
			},
			login(){
				if(this.loginPassword.length<=0||this.loginUsername.length<=0){
					this.$toast("必填项不能为空")
				}
				else{
					// this.$http({
					// 	url:`http://www.520mg.com/member/index_login.php?fmdo=login&dopost=login&userid=${this.loginUsername}&pwd=${this.loginPassword}`,
					// 	method:"post",
					// 	withCredentials:true
					// }).then(res=>{
					// 	if(res.data.status==1){
							this.$toast("登录成功")
							localStorage.setItem("login",true);
							Cookie.set("islog",true,{ expires: 7 })
							// this.grtUserInfo()
							this.flag=3
							localStorage.setItem("flag",3);
							if(this.$route.query.t)
							{
								this.$router.push(this.$route.query.t);
							}
							else{
								this.$router.push("/");
							}
					// 		
					// 	}
					// 	else{
					// 		this.$toast(res.data.msg)
					// 	}
					// }).catch(err=>{
					// 	console.log("请求出错",err)
					// })
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.mine{
		position: relative;
		.set{
			position: absolute;
			left: 10px;top: 10px;
		}
		.lot{
			position: absolute;
			right: 10px;top: 10px;
		}
		.mePhoto{
			border-radius: 50%;
			width: 88px;
			height: 88px; 
			background-color: rgba(0,0,0,0.5);
			position: absolute;
			top: 50px;left: 0;right: 0;
			margin: auto;
			
		}
		.name{
			position: absolute;
			color: #FFF;
			font-size: 18px;
			top: 140px;
			left: 0;
			right: 0;
			margin: auto;
		}
		.topFoot{
			display: flex;
			box-sizing: border-box;
			justify-content: space-around;
			padding: 10px;
			width: 100%;
			height: 60px;
			position: absolute;
			bottom: 0;
			background-color: rgba(0,0,0,0.2);
			color: #FFF;
			font-size: 12px;
			img{
				width: 22px;height: 22px;
			}
			
		}
		.sample{
			width: 100%;
			font-size: 12px;
			padding: 10px;
			height: 70px;
			color: #888;
			display: flex;
			justify-content: space-around;
			img{
				opacity: 0.5;
				width: 22px;height: 22px;
			}
		}
		*{
			box-sizing: border-box;
		}
		// .body{
		// 	position: absolute;
		// 	
		// }
	}
	
</style>
